/*!
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT
 */

const $RefParser = require('@apidevtools/json-schema-ref-parser')
const path = require('path')
const fs = require('fs')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)

const SCHEMA_PATH = '../src/json-schema/'
const BUNDLED_FILE_NAME = 'bundled.json'

async function parseSchema() {
  try {
    const bundled = await $RefParser.bundle(path.resolve(__dirname, SCHEMA_PATH, 'partial/base.json'))
    const bundledJSON = JSON.stringify(bundled, null, 2)

    writeFile(path.resolve(__dirname, SCHEMA_PATH, BUNDLED_FILE_NAME), bundledJSON)
  } catch (err) {
    console.log(err)
  }
}

parseSchema()
