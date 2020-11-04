function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }

var mergeTwoLists = function(l1, l2) {
    let node1 = l1
    let node2 = l2
    let newList = []

    if (node1 === null && node2 === null) {
        return null
    } else {
        while (node1 != null || node2 != null) {
            if (node1 === null) {
                let nextNode = createNode(node2)
                node2 = nextNode
            }
            else if (node2 === null) {
                let nextNode = createNode(node1)
                node1 = nextNode
            }
            else if (node1.val <= node2.val) {
                let nextNode = createNode(node1)
                node1 = nextNode
            }
            else if (node1.val > node2.val) {
                let nextNode = createNode(node2)
                node2 = nextNode
            }
        }
    }

    for (i = 0; i < newList.length - 1; i++) {
        let node = newList[i]
        let next = newList[i + 1]
        node.next = next
    }

    return newList[0]

    function createNode(node) {
        let value = node.val
        let next = node.next
        let newNode = new ListNode(value)
        newList.push(newNode)
        nextNode = next
        return nextNode
    }
};
