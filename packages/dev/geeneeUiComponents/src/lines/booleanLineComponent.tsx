import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import { Description } from "@geenee/ui/dist"

export interface IBooleanLineComponentProps {
    label: string;
    value: boolean;
    icon?: string;
    iconLabel?: string;
}

export class BooleanLineComponent extends React.Component<IBooleanLineComponentProps> {
    constructor(props: IBooleanLineComponentProps) {
        super(props);
    }

    render() {
        const check = this.props.value ? <FontAwesomeIcon color={'rgb(255, 0, 138)'} icon={faCheck} /> : <FontAwesomeIcon icon={faTimesCircle} />;
        const className = this.props.value ? "value check" : "value uncheck";

        return (
            <div className="textLine">
                {this.props.icon && <img src={this.props.icon} title={this.props.iconLabel} alt={this.props.iconLabel} className="icon" />}
                <Description size={'sm'}>
                    {this.props.label}
                </Description>
                <div className={className}>{check}</div>
            </div>
        );
    }
}
