using Microsoft.AspNetCore.Components;
using static UI_Blazor.Components.TextInputProps;

namespace UI_Blazor.Components
{
    public partial class TextInput
    {
        [Parameter]
        public string Label { get; set; } = string.Empty;

        [Parameter]
        public string Placeholder { get; set; } = string.Empty;

        [Parameter]
        public InputType Type { get; set; } = InputType.Text;

        [Parameter]
        public string Value { get; set; } = string.Empty;

        [Parameter]
        public EventCallback<string> ValueChanged { get; set; }

        private void OnInput(ChangeEventArgs e)
        {
            Value = e.Value?.ToString() ?? string.Empty;
            ValueChanged.InvokeAsync(Value);
        }
    }
}
