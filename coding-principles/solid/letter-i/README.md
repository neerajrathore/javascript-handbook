## Interface segregation principle states: 

A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use. In other words, interfaces should be small and specific to avoid requiring implementing classes to include unused methods.

Example: Employee Management
### Violating ISP
Suppose we modify our EmployeeStorage interface to include methods that are not relevant to all storage types. For instance:

```php
interface EmployeeStorage
{
    public function save(Employee $employee);
    public function load($id);            // Load an employee by ID
    public function delete($id);          // Delete an employee by ID
    public function listAll();            // List all employees
}
```
- While this might work for persistent storage types like file or database storage, it forces implementations like InMemoryStorage to define unnecessary methods, even if they don't make sense for that class.

```php
class InMemoryStorage implements EmployeeStorage
{
    private $data = [];

    public function save(Employee $employee)
    {
        $this->data[] = "{$employee->name}, {$employee->position}";
    }

    public function load($id)
    {
        // Not really applicable to in-memory storage
        throw new \Exception("Not supported");
    }

    public function delete($id)
    {
        // Not really applicable to in-memory storage
        throw new \Exception("Not supported");
    }

    public function listAll()
    {
        return $this->data;
    }
}
```

-  This Violates ISP:
1. The InMemoryStorage class is forced to implement methods it does not logically support.
2. Clients using this interface may attempt to call unsupported methods, leading to runtime errors (Exception).


### Following ISP
To follow ISP, split the EmployeeStorage interface into smaller, more specific interfaces, so classes only implement what they need.

```php
interface Saveable
{
    public function save(Employee $employee);
}

interface Loadable
{
    public function load($id);
}

interface Deletable
{
    public function delete($id);
}

interface Listable
{
    public function listAll();
}
```
- Now, each class implements only the interfaces it actually needs:

```php
class FileStorage implements Saveable, Loadable, Deletable, Listable
{
    public function save(Employee $employee)
    {
        file_put_contents('employee.txt', "{$employee->name}, {$employee->position}");
    }

    public function load($id)
    {
        // Load from file logic
    }

    public function delete($id)
    {
        // Delete from file logic
    }

    public function listAll()
    {
        // List all employees logic
    }
}

class InMemoryStorage implements Saveable, Listable
{
    private $data = [];

    public function save(Employee $employee)
    {
        $this->data[] = "{$employee->name}, {$employee->position}";
    }

    public function listAll()
    {
        return $this->data;
    }
}
```

- Benefits:

1. FileStorage: Implements all relevant interfaces because it supports saving, loading, deleting, and listing employees.
2. InMemoryStorage: Implements only the Saveable and Listable interfaces, as these are the only responsibilities it supports.

- Usage with Polymorphism
Client code now depends only on the specific interfaces it needs:
```php
function storeEmployee(Saveable $storage, Employee $employee)
{
    $storage->save($employee);
    echo "Employee stored successfully!\n";
}

function listEmployees(Listable $storage)
{
    foreach ($storage->listAll() as $employee) {
        echo $employee . PHP_EOL;
    }
}

$employee = new Employee('John Doe', 'Developer');

// Using FileStorage
$fileStorage = new FileStorage();
storeEmployee($fileStorage, $employee);

// Using InMemoryStorage
$memoryStorage = new InMemoryStorage();
storeEmployee($memoryStorage, $employee);
listEmployees($memoryStorage);
```

- This Follows ISP
1. Separation of responsibilities: Classes implement only the methods they need.
2. Clearer contracts: Interfaces are specific and easier to understand.
3. Flexible code: Client code depends on the most minimal, specific interface required for its task.