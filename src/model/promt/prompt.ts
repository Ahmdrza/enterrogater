#!/usr/bin/env node --loader ts-node/esm.mjs
import { Prompt } from 'enquirer/lib/prompt'
import * as util from 'util'

interface FileSystem {
  name: string
  type: 'InterfaceType'
  states: []
  children: []
}

class FileSystem implements FileSystem {
  constructor (options?: FileSystem) {}

  * [Symbol.asyncIterator] () {
    const step = 0
  }

  * [Symbol.for('treeStructure')] (): {

  }
}

console.log(util.inspect(new FileSystem(), true, null, true))
