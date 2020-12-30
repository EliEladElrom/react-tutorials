/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/utils/BinaryTree.tsx

  const list = new LinkedList()
  list.insert(1)
  list.insert(2)
  console.log(JSON.stringify(list))

 */

// eslint-disable-next-line max-classes-per-file
export class Node<U> {

  private readonly value: U

  next: Node<U> | null | undefined

  constructor(value: U) {
    this.value = value
    this.next = null
  }

  getValue(): U {
    return this.value
  }
}

export class LinkedList<U> {

  private list: Node<U> | null

  constructor()
  constructor(link: Node<U>)
  constructor(link: Node<U>, list?: LinkedList<U>)
  constructor(link?: Node<U>, list?: LinkedList<U>) {
    if (!link) {
      this.list = null
    } else {
      this.list = link
      this.list.next = list?.list
    }
  }

  insert(value: U): void {
    const currentList = this.list
    if (!currentList) {
      this.list = new Node<U>(value)
    } else {
      let newNode: Node<U>
      // eslint-disable-next-line prefer-const
      newNode = new Node<U>(value)
      newNode.next = currentList
      this.list = newNode
    }
  }
}
