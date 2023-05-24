// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSFramework.OSUI.Feature.Balloon {
	/**
	 * Defines the interface for OutSystemsUI Balloon Pattern
	 */
	export interface IBalloon extends Feature.IFeature, Interface.IOpenable {
		setFloatingUIBehaviour(isUpdate?: boolean): void;
	}
}
