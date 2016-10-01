// @flow
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const source = {

    // Runs once when you begin dragging.
    // Must return a plain object that represents the dragged item.
    beginDrag(props) {
        return { ...props };
    }
};

const target = {

    // Runs while hovering
    // handles rearranging the items as you hover over them
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        if (dragIndex !== undefined && hoverIndex !== undefined) {
            props.onMoveBudget({ dragIndex, hoverIndex });
        }

        monitor.getItem().index = hoverIndex;
    }
};

const connectDrag = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

const connectDrop = (connect) => {
    return { connectDropTarget: connect.dropTarget() };
};

const decorateWithDrag = (component) => {
    return DragSource('Budget', source, connectDrag)(component);
};

const decorateWithDrop = (component) => {
    return DropTarget('Budget', target, connectDrop)(component);
};

type Props = {
    connectDragSource: () => void,
    connectDropTarget: () => void
};

const withListDragAndDrop = (WrappedComponent) =>
    decorateWithDrop(decorateWithDrag(class withListDragAndDropClass extends Component {
        props: Props;

        render() {
            const { connectDragSource, connectDropTarget } = this.props;

            return connectDragSource(connectDropTarget(
                <div>
                    <WrappedComponent {...this.props} />
                </div>
            ));
        }
    }));

export default withListDragAndDrop;
