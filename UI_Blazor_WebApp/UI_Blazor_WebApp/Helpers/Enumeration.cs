namespace UI_Blazor_WebApp.Helpers
{
    public abstract class Enumeration
    {
        public int Id { get; private set; }
        public string Name { get; private set; }

        protected Enumeration(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public override string ToString() => Name.ToLower();
    }
}
