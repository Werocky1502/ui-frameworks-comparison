import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css"
})
export class ButtonComponent {
  @Input() text: string = "Default text";
  @Input() disabled: boolean = false;
  @Input() type: "button" | "submit" = "button";
  @Input() variant: "dark" | "light" = "light";

  @Output() onClick = new EventEmitter<MouseEvent>();

  onButtonClickHandler(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
