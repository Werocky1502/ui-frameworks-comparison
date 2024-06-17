using UI_Blazor.Helpers;

namespace UI_Blazor.Components
{
    public static class TextInputProps
    {
        public class InputType : Enumeration
        {
            public static readonly InputType Text = new(1, "text");
            public static readonly InputType Number = new(2, "number");
            public static readonly InputType Date = new(2, "date");

            public InputType(int id, string name) : base(id, name) { }
        }
    }
}
