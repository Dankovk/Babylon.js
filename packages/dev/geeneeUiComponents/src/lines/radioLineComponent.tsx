import * as React from "react";
import type { Nullable } from "core/types";
import type { Observer, Observable } from "core/Misc/observable";
// @ts-ignore
import {Description, Radio} from '@geenee/ui/dist'

interface IRadioButtonLineComponentProps {
    onSelectionChangedObservable: Observable<RadioButtonLineComponent>;
    label: string;
    isSelected: () => boolean;
    onSelect: () => void;
    icon?: string;
    iconLabel?: string;
}

export class RadioButtonLineComponent extends React.Component<IRadioButtonLineComponentProps, { isSelected: boolean }> {
    private _onSelectionChangedObserver: Nullable<Observer<RadioButtonLineComponent>>;

    constructor(props: IRadioButtonLineComponentProps) {
        super(props);

        this.state = { isSelected: this.props.isSelected() };
    }

    componentDidMount() {
        this._onSelectionChangedObserver = this.props.onSelectionChangedObservable.add((value) => {
            this.setState({ isSelected: value === this });
        });
    }

    componentWillUnmount() {
        if (this._onSelectionChangedObserver) {
            this.props.onSelectionChangedObservable.remove(this._onSelectionChangedObserver);
            this._onSelectionChangedObserver = null;
        }
    }

    onChange() {
        this.props.onSelect();
        this.props.onSelectionChangedObservable.notifyObservers(this);
    }

    render() {
        return (
            <div className="radioLine">
                {this.props.icon && <img src={this.props.icon} title={this.props.iconLabel} alt={this.props.iconLabel} className="icon" />}
                <Description size={'sm'}>
                    {this.props.label}
                </Description>
                <div className="radioContainer">
                    <input id={this.props.label} className="radio" type="radio" checked={this.state.isSelected} onChange={() => this.onChange()} />
                    <label htmlFor={this.props.label} className="labelForRadio" />
                </div>
            </div>
        );
    }
}
