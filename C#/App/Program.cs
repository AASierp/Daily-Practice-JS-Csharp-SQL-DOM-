using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, world!");

            Person p = new Person { Name = "Aaron", Age = 38 };
            p.Greet();
        }
    }
}
