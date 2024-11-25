## Liskov Substitution Principle states: 

objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program. In simpler terms, any class that inherits from a parent class or implements an interface should behave as expected without requiring changes in the client code.

Example: Employee Management
### Violating LSP: Imagine we create a new storage class, `InMemoryStorage`, that is supposed to store employee data temporarily. However, it behaves in a way that violates the contract defined by the `EmployeeStorage` interface.

```php
class InMemoryStorage implements EmployeeStorage
{
    private $data = [];

    public function save(Employee $employee)
    {
        // Storing employee in memory
        $this->data[] = "{$employee->name}, {$employee->position}";
    }

    public function getData()
    {
        return $this->data;
    }
}
```
- At first glance, this class seems fine. However, if a client expects the save method to persist data for retrieval (like file or database storage), the behavior of InMemoryStorage could lead to unexpected issues. For instance:

```php
$employee = new Employee('John Doe', 'Developer');

// Switching between storage types
$storage = new FileStorage(); // Works as expected
$storage->save($employee);

$storage = new InMemoryStorage(); // LSP violation: behavior is inconsistent
$storage->save($employee);
// Data is only in memory, not persistent. Clients depending on persistence may fail.
```

### Correctly Following LSP: 
- To comply with LSP:
1. Ensure the InMemoryStorage class aligns with the expectations of the EmployeeStorage interface.
2. The behavior should be consistent across all implementations.

```php
class InMemoryStorage implements EmployeeStorage
{
    private $data = [];

    public function save(Employee $employee)
    {
        $this->data[] = "{$employee->name}, {$employee->position}";
    }

    public function getData()
    {
        return $this->data;
    }

    // Optional: Add an interface or additional documentation to clarify that this is transient storage
}
```
- Now, let’s use polymorphism to demonstrate how LSP works:

```php
function storeEmployee(EmployeeStorage $storage, Employee $employee)
{
    $storage->save($employee);
    echo "Employee stored successfully!\n";
}

$employee = new Employee('Jane Doe', 'Manager');

// Using FileStorage
$fileStorage = new FileStorage();
storeEmployee($fileStorage, $employee);

// Using InMemoryStorage
$memoryStorage = new InMemoryStorage();
storeEmployee($memoryStorage, $employee);
print_r($memoryStorage->getData());
```

-  This Follows LSP
1. Consistency in behavior: The save method is implemented in a way that all subclasses (FileStorage, DatabaseStorage, InMemoryStorage) respect the contract defined by EmployeeStorage.
2. Substitutable implementations: Regardless of which EmployeeStorage implementation is used, the client code (storeEmployee) remains unchanged and works correctly.
3. No surprises: Each implementation has clearly defined behavior, and if certain behaviors (e.g., persistence) are not guaranteed, this is made explicit.