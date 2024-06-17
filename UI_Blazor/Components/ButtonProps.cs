using UI_Blazor.Helpers;

namespace UI_Blazor.Components
{
    public static class ButtonProps
    {
        public class ButtonType : Enumeration
        {
            public static readonly ButtonType Button = new(1, "button");
            public static readonly ButtonType Submit = new(2, "submit");

            public ButtonType(int id, string name) : base(id, name) { }
        }

        public class ButtonVariant : Enumeration
        {
            public static readonly ButtonVariant Dark = new(1, "dark");
            public static readonly ButtonVariant Light = new(2, "light");

            public ButtonVariant(int id, string name) : base(id, name) { }
        }
    }
}
