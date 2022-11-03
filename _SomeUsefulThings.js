function Node(val, next) {
    return { val, next };
}

const NodeList = Node(1, Node(2, Node(3, Node(4, Node(3, Node(2, null))))));
