## Dependency inversion principle states: 

Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions. In simpler terms, instead of tightly coupling classes to specific implementations, they should depend on interfaces or abstract classes. This makes the system more flexible and easier to maintain.

Example: Employee Management
### Violating DIP
Suppose we directly depend on specific implementations, like FileStorage or DatabaseStorage, in the client code.

```php
class EmployeeService
{
    private $fileStorage;

    public function __construct()
    {
        $this->fileStorage = new FileStorage();
    }

    public function saveEmployee(Employee $employee)
    {
        $this->fileStorage->save($employee);
    }
}
```
- Problems:
1. The EmployeeService class is tightly coupled to FileStorage. If we want to use another storage method, such as DatabaseStorage, we must modify the EmployeeService class.
2. Testing becomes harder because we cannot easily substitute FileStorage with a mock or alternative implementation.

### Following DIP
To follow DIP, the EmployeeService class should depend on an abstraction (EmployeeStorage interface), not on a concrete class (FileStorage).

Step 1: Define an Interface
We already have the `EmployeeStorage` interface:

```php
interface EmployeeStorage
{
    public function save(Employee $employee);
}
```
- Step 2: Implement Concrete Classes
Concrete classes implement the `EmployeeStorage` interface:

```php
class FileStorage implements EmployeeStorage
{
    public function save(Employee $employee)
    {
        file_put_contents('employee.txt', "{$employee->name}, {$employee->position}");
    }
}

class DatabaseStorage implements EmployeeStorage
{
    public function save(Employee $employee)
    {
        echo "Saving {$employee->name} to the database.";
    }
}
```

Step 3: Refactor `EmployeeService` to Depend on the Abstraction
Use dependency injection to pass the storage implementation into `EmployeeService`.

```php
class EmployeeService
{
    private $storage;

    public function __construct(EmployeeStorage $storage)
    {
        $this->storage = $storage;
    }

    public function saveEmployee(Employee $employee)
    {
        $this->storage->save($employee);
    }
}
```

Step 4: Client Code
The client decides which storage implementation to use, without changing the `EmployeeService` class.

```php
$employee = new Employee('John Doe', 'Developer');

// Use FileStorage
$fileStorage = new FileStorage();
$service = new EmployeeService($fileStorage);
$service->saveEmployee($employee);

// Use DatabaseStorage
$databaseStorage = new DatabaseStorage();
$service = new EmployeeService($databaseStorage);
$service->saveEmployee($employee);
```

-  This Follows DIP
1. High-level module (EmployeeService) depends on an abstraction (EmployeeStorage) rather than a concrete class.
2. Low-level modules (FileStorage, DatabaseStorage) also depend on the same abstraction.
3. New storage implementations (e.g., CloudStorage) can be added without modifying the EmployeeService class or the client code.
4. Improves testability: You can pass a mock implementation of EmployeeStorage for testing.