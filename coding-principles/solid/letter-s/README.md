## Single-responsibility Principle (SRP) states:

A class should have one and only one reason to change, meaning that a class should have only one job.

Example: Employee Management
- Without SRP: The class below violates SRP because it handles both employee data and file operations

```php
class Employee
{
    public $name;
    public $position;

    public function __construct($name, $position)
    {
        $this->name = $name;
        $this->position = $position;
    }

    public function saveToFile()
    {
        // Responsibility: Storing employee data
        file_put_contents('employee.txt', "{$this->name}, {$this->position}");
    }
}
```
- This class does two things:
1. It manages employee data.
2. It handles file storage.

- If we need to change the storage mechanism (e.g., use a database), the class would have to change.

- With SRP: Split the responsibilities into two separate classes: one for employee data and another for file operations.

```php
class Employee
{
    public $name;
    public $position;

    public function __construct($name, $position)
    {
        $this->name = $name;
        $this->position = $position;
    }
}

class EmployeeFileStorage
{
    public function save(Employee $employee)
    {
        file_put_contents('employee.txt', "{$employee->name}, {$employee->position}");
    }
}

// Usage
$employee = new Employee('John Doe', 'Developer');
$storage = new EmployeeFileStorage();
$storage->save($employee);
```

- This follows SRP:
1. Employee class: Only responsible for holding employee data.
2. EmployeeFileStorage class: Only responsible for saving employee data to a file.

- Each class has a single reason to change:
1. If the employee data structure changes, only the Employee class changes.
2. If the storage method changes, only the EmployeeFileStorage class changes