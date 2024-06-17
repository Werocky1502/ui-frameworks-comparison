using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;

namespace UI_Blazor.Components
{
    public partial class NavigationMenu
    {
        [Inject]
        public NavigationManager NavigationManager { get; set; }

        private string currentRelativeUri = string.Empty;

        protected override void OnInitialized()
        {
            currentRelativeUri = NavigationManager.ToBaseRelativePath(NavigationManager.Uri);
            NavigationManager.LocationChanged += HandleLocationChanged;
        }

        public bool IsCurrentPath(string path)
        {
            var isCurrentPath = currentRelativeUri == path.TrimStart('/');

            return isCurrentPath;
        }

        public void NavigateTo(string path)
        {
            NavigationManager.NavigateTo(path);
        }

        private void HandleLocationChanged(object? sender, LocationChangedEventArgs e)
        {
            currentRelativeUri = NavigationManager.ToBaseRelativePath(e.Location);
            StateHasChanged();
        }
    }
}
