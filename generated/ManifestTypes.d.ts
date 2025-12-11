/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    buttonLabel: ComponentFramework.PropertyTypes.StringProperty;
    jsFunction: ComponentFramework.PropertyTypes.StringProperty;
    triggerOutput: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    buttonLabel?: string;
    triggerOutput?: string;
}
