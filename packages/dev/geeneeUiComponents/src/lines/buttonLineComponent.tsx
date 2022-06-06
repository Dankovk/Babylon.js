import * as React from "react";
// @ts-ignore
import {Button} from "@geenee/ui/dist"

export interface IButtonLineComponentProps {
    label: string;
    onClick: () => void;
    icon?: string;
    iconLabel?: string;
}

export class ButtonLineComponent extends React.Component<IButtonLineComponentProps> {
    constructor(props: IButtonLineComponentProps) {
        super(props);
    }

    render() {
        return (<div className="buttonLine">
            <Button onClick={() => this.props.onClick()}>
                {this.props.icon && <img src={this.props.icon} title={this.props.iconLabel} alt={this.props.iconLabel} className="icon"/>}
                {this.props.label}
            </Button>
        </div>)
        /*return (
            <div className="buttonLine">
                {this.props.icon && <img src={this.props.icon} title={this.props.iconLabel} alt={this.props.iconLabel}
                                         className="icon"/>}
                <button onClick={() => this.props.onClick()}>{this.props.label}</button>
            </div>
        );*/
    }
}
