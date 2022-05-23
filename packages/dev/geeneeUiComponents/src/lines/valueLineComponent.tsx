import * as React from "react";
// @ts-ignore
import {Description} from '@geenee/ui/dist';

interface IValueLineComponentProps {
    label: string;
    value: number;
    color?: string;
    fractionDigits?: number;
    units?: string;
    icon?: string;
    iconLabel?: string;
}

export class ValueLineComponent extends React.Component<IValueLineComponentProps> {
    constructor(props: IValueLineComponentProps) {
        super(props);
    }

    render() {
        const digits = this.props.fractionDigits !== undefined ? this.props.fractionDigits : 2;
        const value = this.props.value.toFixed(digits) + (this.props.units ? " " + this.props.units : "");

        return (
            <div className="textLine">
                {this.props.icon && <img src={this.props.icon} title={this.props.iconLabel} alt={this.props.iconLabel} className="icon" />}
                <Description size={'sm'}>
                    {this.props.label}
                </Description>
                <Description size={'sm'} style={{ color: this.props.color ? this.props.color : "" }}>
                    {value}
                </Description>
            </div>
        );
    }
}
