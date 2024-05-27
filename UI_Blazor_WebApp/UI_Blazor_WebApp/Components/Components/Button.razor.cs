using Microsoft.AspNetCore.Components;
using static UI_Blazor_WebApp.Components.Components.ButtonProps;

namespace UI_Blazor_WebApp.Components.Components
{
    public partial class Button
    {
        [Parameter]
        public string Text { get; set; } = "Default text";

        [Parameter]
        public bool Disabled { get; set; } = false;

        [Parameter]
        public ButtonType Type { get; set; } = ButtonType.Button;

        [Parameter]
        public ButtonVariant Variant { get; set; } = ButtonVariant.Light;

        [Parameter]
        public EventCallback OnClick { get; set; }

        private async Task ButtonClickHandler()
        {
            await OnClick.InvokeAsync();
        }
    }
}
