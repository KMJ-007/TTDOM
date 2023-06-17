function TTDOM(){


// which component to render and where to render in dom tree
function render(Component,target){
    // creating node and mounting it for first render
    let virtualNode  = new virtualComponent(Component);
    virtualNode.mount(target);
};

// for using children/sub component in the application
class virtualComponent{
    constructor(component,props){
        this.component = component;
        // instance will need for reference of the component which is getting called
        this.instance = null;
        // props
        this.props = props;
    };

    // mounting the component into DOM
    mount(parent,afterNode){
        
        this.instance = this.component(()=>this.patch());
        // creating instance and assigning it to node
        this.node = this.instance(this.props);
        // the new component's node will be inserted between parent and afterNode
        this.node.mount(parent,afterNode);
    }

    // patch for updating the node in dom
    patch(other) {
        this.node.patch(this.instance(other.props));
    }

    // will move the component's node in virtual tree
    moveBefore(other, afterNode) {
        this.node.moveBefore(other ? other.node : null, afterNode);
      }
    
    componentWillUnmount() {
        this.node.componentWillUnmount();
    }
    
    remove() {
    this.node.remove();
    }
    
    firstNode() {
    return this.node.firstNode();
    }
}

function component(C, props) {
    return new virtualComponent(C, props);
}
window.ttdom ={
    component,
    render
}
}

TTDOM();