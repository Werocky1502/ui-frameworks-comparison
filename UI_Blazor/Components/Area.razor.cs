using Microsoft.AspNetCore.Components;

namespace UI_Blazor.Components
{
    public partial class Area
    {
        [Parameter]
        public RenderFragment HeaderFragment { get; set; }

        [Parameter]
        public RenderFragment ContentFragment { get; set; }
    }
}
