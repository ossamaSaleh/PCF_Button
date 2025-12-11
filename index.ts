import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class ButtonPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private button!: HTMLButtonElement;
    private container!: HTMLDivElement;
    private context!: ComponentFramework.Context<IInputs>;
    private triggerOutput = "";
    private notifyOutputChanged!: () => void;

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.context = context;
        this.notifyOutputChanged = notifyOutputChanged;

        this.container = document.createElement("div");

        const style = document.createElement("style");
        style.textContent = `
            .info-button {
                background-color: #17a2b8;
                color: white;
                border: none;
                padding: 8px 16px;
                font-size: 14px;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            .info-button:hover {
                background-color: #138496;
            }
            .info-button:active {
                background-color: #117a8b;
            }
        `;
        this.container.appendChild(style);

        
        this.button = document.createElement("button");
        this.button.textContent = context.parameters.buttonLabel.raw || "Submit";
        this.button.classList.add("info-button");

        this.button.onclick = () => {
            this.triggerOutput = new Date().toISOString();
            this.notifyOutputChanged();
        };

        this.container.appendChild(this.button);
        container.appendChild(this.container);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this.button.textContent = context.parameters.buttonLabel.raw || "Submit";
    }

    public getOutputs(): IOutputs {
        return { triggerOutput: this.triggerOutput };
    }

    public destroy(): void {
        this.button.onclick = null;
    }
}
