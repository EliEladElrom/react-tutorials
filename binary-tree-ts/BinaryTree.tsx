/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/utils/BinaryTree.tsx

Implement example;

  const binaryTree = new BinaryTree()
  binaryTree.add(10).add(20).add(30).add(5).add(8).add(3).add(9)

  const binaryTree2 = new BinaryTree()
  binaryTree2.add('j').add('f').add('k').add('z').add('a').add('h').add('d')

  console.log(JSON.stringify(binaryTree))
  console.log(binaryTree.contains(30))
  console.log(binaryTree.findMin()) // 3
  console.log(binaryTree.findMax()) // 30

  console.log(JSON.stringify( binaryTree.convertToLinkedList('postOrder') ) )

*/

import { LinkedList } from './LinkedList'

export default class BinaryTree<U> {

  private root: INode<U> | undefined

  createNewNode = (value: U): INode<U> => {
    return {
      value,
      left: null,
      right: null,
    }
  }

  insert = (value: U) => {
    const currentNode = this.createNewNode(value)
    if (!this.root) {
      this.root = currentNode
    } else {
      this.insertIntoCurrentNode(currentNode)
    }
    return this
  }

  private insertIntoCurrentNode = (currentNode: INode<U>) => {
    const { value } = currentNode
    const traverse = (node: INode<U>) => {
      if (value > node.value) {
        if (!node.right) {
          // eslint-disable-next-line no-param-reassign
          node.right = currentNode
        } else traverse(node.right)
      } else if (value < node.value) {
        if (!node.left) {
          // eslint-disable-next-line no-param-reassign
          node.left = currentNode
        } else traverse(node.left)
      }
    }
    traverse(this.root as INode<U>)
  }

  contains = (value: U) => {
    // eslint-disable-next-line consistent-return
    const traverse = (node: INode<U>): undefined | boolean => {
      if (!node) return false
      if (value === node.value) {
        return true
      }
      if (value > node.value) {
        return traverse(node.right as INode<U>)
      }
      if (value < node.value) {
        return traverse(node.left as INode<U>)
      }
    }
    const rootNode: INode<U> | undefined = this.root
    return traverse(rootNode as INode<U>)
  }

  // find the left most node to find the min value of a binary tree
  findMin = () => {
    const traverse = (node: INode<U>): INode<U> | U => {
      return !node.left ? node.value : traverse(node.left)
    }
    const rootNode: INode<U> = this.root as INode<U>
    return traverse(rootNode)
  }

  // find the right most node to find the max value of a binary tree
  findMax = () => {
    const traverse = (node: INode<U>): INode<U> | U => {
      return !node.right ? node.value : traverse(node.right)
    }
    const rootNode: INode<U> = this.root as INode<U>
    return traverse(rootNode)
  }

  preOrder = () => {
    let result: U[]
    // eslint-disable-next-line prefer-const
    result = []
    const traverse = (node: INode<U>) => {
      result.push(node.value)
      node.left && traverse(node.left)
      node.right && traverse(node.right)
    }
    const rootNode: INode<U> | undefined = this.root as INode<U>
    traverse(rootNode)
    return result
  }

  inOrder = () => {
    let result: U[]
    // eslint-disable-next-line prefer-const
    result = []
    const traverse = (node: INode<U>) => {
      node.left && traverse(node.left)
      result.push(node.value)
      node.right && traverse(node.right)
    }
    const rootNode: INode<U> | undefined = this.root as INode<U>
    traverse(rootNode)
    return result
  }

  postOrder = () => {
    let result: U[]
    // eslint-disable-next-line prefer-const
    result = []
    const traverse = (node: INode<U>) => {
      node.left && traverse(node.left)
      node.right && traverse(node.right)
      result.push(node.value)
    }
    const rootNode: INode<U> | undefined = this.root as INode<U>
    traverse(rootNode)
    return result
  }

  toString = () => {
    return JSON.stringify( this.inOrder() )
  }

  convertToLinkedList = (orderType: 'inOrder' | 'postOrder') => {
    const list = new LinkedList()
    const ordered = orderType === 'inOrder' ? this.inOrder() : this.postOrder()
    ordered.forEach(value => {
      list.insert(value)
    })
    return list
  }
}

interface INode<U> {
  value: U
  left: INode<U> | null
  right: INode<U> | null
}
