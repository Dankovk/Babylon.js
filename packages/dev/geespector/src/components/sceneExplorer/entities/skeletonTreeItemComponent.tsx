import type { IExplorerExtensibilityGroup } from "core/Debug/debugLayer";
import { ExtensionsComponent } from "../extensionsComponent";
import * as React from "react";
import type { Skeleton } from "core/Bones/skeleton";

interface ISkeletonTreeItemComponentProps {
    skeleton: Skeleton;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}

export class SkeletonTreeItemComponent extends React.Component<ISkeletonTreeItemComponentProps> {
    constructor(props: ISkeletonTreeItemComponentProps) {
        super(props);
    }

    render() {
        const skeleton = this.props.skeleton;
        return (
            <div className="skeletonTools">
                {/*<TreeItemLabelComponent label={skeleton.name || "no name"} onClick={() => this.props.onClick()} icon={faSkull} color="gray" />*/}
                {<ExtensionsComponent target={skeleton} extensibilityGroups={this.props.extensibilityGroups} />}
            </div>
        );
    }
}
