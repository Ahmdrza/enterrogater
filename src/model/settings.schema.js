const itemType = {
  dir: {},
  prompt: {}
}
export { itemType as type }

export const settingsSchema = {
  name: 'settings',
  limit: '10',
  message: ['message a', 'message b', 'message c'],
  indentStrings: ['', ' '],
  choices: [
    {
      name: 'general',
      message: 'General',
      tooltip: '"General Settings!"',
      choices: [
        {
          name: 'UI',
          message: 'User-Interface',
          tooltip: 'User-Interface',
          choices: ['TODO']
        }
      ]
    },
    {
      name: 'auth',
      message: 'Auth',
      tooltip: 'auth-stuff',
      choices: [
        {
          name: 'TODO',
          message: 'TODO',
          tooltip: 'TODO',
          choices: ['TODO']
        }
      ]
    },
    {
      name: 'torrent',
      message: 'Torrent',
      tooltip: 'open torrent config',
      choices: [
        {
          name: 'general',
          message: 'General',
          tooltip: 'switch to the readline interface',
          choices: [
            {
              name: 'transferList',
              message: 'transferList',
              tooltip: 'transferList',
              choices: [
                {
                  name: 'confirmDelete',
                  message: 'confirm when deleting torrents',
                  tooltip: 'confirm when deleting torrents'

                },
                {
                  name: 'useAlternateRowColors',
                  message: 'Use Alternate Row Colors',
                  tooltip: 'Use Alternate Row Colors'

                },
                {
                  name: 'hideZeroAndInfinityValues',
                  message: 'Hide Zero And Infinity Values',
                  tooltip: 'Hide Zero And Infinity Values'

                }
              ]
            },
            {
              name: 'client',
              message: 'Client',
              tooltip: 'Client',
              choices: [
                {
                  name: 'confirmExitWhenTorrentsAreActive',
                  message: 'confirmExitWhenTorrentsAreActive',
                  tooltip: 'confirmExitWhenTorrentsAreActive'

                },
                {
                  name: 'confirmationOnAutoExitWhenDownloadsFinish',
                  message: 'confirmationOnAutoExitWhenDownloadsFinish',
                  tooltip: 'confirmationOnAutoExitWhenDownloadsFinish'

                },
                {
                  name: 'fileAssociation',
                  message: 'fileAssociation',
                  tooltip: 'fileAssociation',
                  choices: [
                    {
                      name: 'dotTorrentFiles',
                      message: 'dotTorrentFiles',
                      tooltip: 'dotTorrentFiles'
                    },
                    {
                      name: 'useWithMagnetLinks',
                      message: 'useWithMagnetLinks',
                      tooltip: 'useWithMagnetLinks'

                    }
                  ]
                },
                {
                  name: 'checkForUpdates',
                  message: 'checkForUpdates',
                  tooltip: 'checkForUpdates'
                }
              ]
            },
            {
              name: 'powerManagement',
              message: 'powerManagement',
              tooltip: 'powerManagement',
              choices: [
                {
                  name: 'inhibitSleepWhileDownloading',
                  message: 'inhibitSleepWhileDownloading',
                  tooltip: 'inhibitSleepWhileDownloading'

                },
                {
                  name: 'inhibitSleepWhenSeeding',
                  message: 'inhibitSleepWhenSeeding',
                  tooltip: 'inhibitSleepWhenSeeding'

                }
              ]
            },
            {
              name: 'logFile',
              message: 'logFile',
              tooltip: 'logFile',
              choices: [
                {
                  name: 'path',
                  message: 'path',
                  tooltip: 'path',
                  choices: []
                },
                {
                  name: 'backupAfter',
                  message: 'backupAfter',
                  tooltip: 'backupAfter'

                },
                {
                  name: 'deleteLogsOlderThan',
                  message: 'deleteLogsOlderThan',
                  tooltip: 'deleteLogsOlderThan'

                }
              ]
            }
          ]
        },
        {
          name: 'downloads',
          message: 'Downloads',
          tooltip: 'kill the master process'

        },
        {
          name: 'connection',
          message: 'Connection',
          tooltip: 'restart the torrent client'

        },
        {
          name: 'speed',
          message: 'Speed',
          tooltip: 'open the command pallet'

        },
        {
          name: 'bitTorrent',
          message: 'bitTorrent',
          tooltip: 'browse the filesystem'

        },
        {
          name: 'RSS',
          message: 'RSS',
          tooltip: 'opens the process settings'

        },
        {
          name: 'webUI',
          message: 'web-UI',
          tooltip: 'restart the torrent client'

        },
        {
          name: 'advanced',
          message: 'advanced',
          tooltip: 'open the command pallet'
        }
      ]
    }
  ]
}
