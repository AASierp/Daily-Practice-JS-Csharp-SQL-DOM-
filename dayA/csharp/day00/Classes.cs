namespace Classes
{
    public class Person
    {
        public string Name { get; set; } = "";
        public int Age { get; set; }

        public void Greet()
        {
            Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old");
        }
    }
}