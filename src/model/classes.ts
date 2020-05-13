
type ItemType = 'item' | 'directory'

interface Item {
  type: ItemType
  parent: Item
  name: string
  message: string
  toggle: boolean
  hidden: boolean
}

interface DirOptions extends Item {
  children: Item[]
}

class Item implements Item {
  constructor(options: ItemOptions)

  get path (): string { return [this.parent.path, this.path].join('.') }
  get isHidden (): boolean { return this.hidden }
}

class Directory extends Item implements DirOptions {
  constructor(options: DirOptions)
}
