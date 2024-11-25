## Open-closed Principle states:

Objects or entities should be open for extension but closed for modification. In other words, you should be able to add new functionality to a class without changing its existing code.

Example: Employee Management
### Without OCP: Suppose we need to add a new functionality to save employees to a database instead of a file. If we directly modify the EmployeeFileStorage class to handle database storage, it violates OCP because the class is no longer "closed" to modification.

```php
class EmployeeStorage
{
    public function save(Employee $employee, $type = 'file')
    {
        if ($type === 'file') {
            file_put_contents('employee.txt', "{$employee->name}, {$employee->position}");
        } elseif ($type === 'database') {
            // New database logic
            echo "Saving {$employee->name} to the database.";
        }
    }
}
```
- Problems:
1. You have to modify the existing save method every time you add a new storage type.
2. Over time, the method becomes bloated with multiple conditions, making it harder to maintain.

### With OCP: Instead of modifying the EmployeeStorage class, we can extend its functionality by creating separate classes for each storage type. Use polymorphism to handle different storage methods.

- Step 1: Define a Storage Interface This ensures all storage types follow the same method structure.

```php
interface EmployeeStorage
{
    public function save(Employee $employee);
}
```
- Step 2: Implement Different Storage Classes Each storage class is responsible for a specific storage mechanism.

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
        // Simulated database storage
        echo "Saving {$employee->name} to the database.";
    }
}
```
- Step 3: Use the Classes Without Modifying Them You can now switch storage types by using different implementations of the EmployeeStorage interface.

```php
// Usage
$employee = new Employee('Jane Doe', 'Manager');

// Save to a file
$fileStorage = new FileStorage();
$fileStorage->save($employee);

// Save to a database
$dbStorage = new DatabaseStorage();
$dbStorage->save($employee);
```
- This Follows OCP
1. The Employee class and EmployeeStorage interface remain unchanged.
2. New storage types (e.g., cloud storage) can be added by creating additional classes that implement EmployeeStorage.
3. No existing code needs to be modified, reducing the risk of introducing bugs.