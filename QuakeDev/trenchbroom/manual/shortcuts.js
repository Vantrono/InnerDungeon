const keys = {
    'Esc': 'Esc',
    'Tab': 'Tab',
    'Backtab': 'Backtab',
    'Backspace': 'Backspace',
    'Return': 'Return',
    'Enter': 'Enter',
    'Ins': 'Ins',
    'Del': 'Del',
    'Pause': 'Pause',
    'Print': 'Print',
    'SysReq': 'SysReq',
    'Clear': 'Clear',
    'Home': 'Home',
    'End': 'End',
    'Left': 'Left',
    'Up': 'Up',
    'Right': 'Right',
    'Down': 'Down',
    'PgUp': 'PgUp',
    'PgDown': 'PgDown',
    'Shift': 'Shift',
    'Ctrl': 'Ctrl',
    'Meta': 'Meta',
    'Alt': 'Alt',
    'CapsLock': 'CapsLock',
    'NumLock': 'NumLock',
    'ScrollLock': 'ScrollLock',
    'F1': 'F1',
    'F2': 'F2',
    'F3': 'F3',
    'F4': 'F4',
    'F5': 'F5',
    'F6': 'F6',
    'F7': 'F7',
    'F8': 'F8',
    'F9': 'F9',
    'F10': 'F10',
    'F11': 'F11',
    'F12': 'F12',
    'F13': 'F13',
    'F14': 'F14',
    'F15': 'F15',
    'F16': 'F16',
    'F17': 'F17',
    'F18': 'F18',
    'F19': 'F19',
    'F20': 'F20',
    'F21': 'F21',
    'F22': 'F22',
    'F23': 'F23',
    'F24': 'F24',
    'F25': 'F25',
    'F26': 'F26',
    'F27': 'F27',
    'F28': 'F28',
    'F29': 'F29',
    'F30': 'F30',
    'F31': 'F31',
    'F32': 'F32',
    'F33': 'F33',
    'F34': 'F34',
    'F35': 'F35',
    'ៀ?': 'ៀ?',
    'ៀ?': 'ៀ?',
    'Menu': 'Menu',
    'ៀ?': 'ៀ?',
    'ៀ?': 'ៀ?',
    'Help': 'Help',
    'ៀ?': 'ៀ?',
    'ៀ?': 'ៀ?',
    'Space': 'Space',
    'Space': 'Space',
    '!': '!',
    '"': '"',
    '#': '#',
    '$': '$',
    '%': '%',
    '&': '&',
    '\'': '\'',
    '(': '(',
    ')': ')',
    '*': '*',
    '+': '+',
    ',': ',',
    '-': '-',
    '.': '.',
    '/': '/',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    ':': ':',
    ';': ';',
    '<': '<',
    '=': '=',
    '>': '>',
    '?': '?',
    '@': '@',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '[': '[',
    '\\': '\\',
    ']': ']',
    '^': '^',
    '_': '_',
    '`': '`',
    '{': '{',
    '|': '|',
    '}': '}',
    '~': '~',
    ' ': ' ',
    '¡': '¡',
    '¢': '¢',
    '£': '£',
    '¤': '¤',
    '¥': '¥',
    '¦': '¦',
    '§': '§',
    '¨': '¨',
    '©': '©',
    'ª': 'ª',
    '«': '«',
    '¬': '¬',
    '­': '­',
    '®': '®',
    '¯': '¯',
    '°': '°',
    '±': '±',
    '²': '²',
    '³': '³',
    '´': '´',
    'Μ': 'Μ',
    '¶': '¶',
    '·': '·',
    '¸': '¸',
    '¹': '¹',
    'º': 'º',
    '»': '»',
    '¼': '¼',
    '½': '½',
    '¾': '¾',
    '¿': '¿',
    'À': 'À',
    'Á': 'Á',
    'Â': 'Â',
    'Ã': 'Ã',
    'Ä': 'Ä',
    'Å': 'Å',
    'Æ': 'Æ',
    'Ç': 'Ç',
    'È': 'È',
    'É': 'É',
    'Ê': 'Ê',
    'Ë': 'Ë',
    'Ì': 'Ì',
    'Í': 'Í',
    'Î': 'Î',
    'Ï': 'Ï',
    'Ð': 'Ð',
    'Ñ': 'Ñ',
    'Ò': 'Ò',
    'Ó': 'Ó',
    'Ô': 'Ô',
    'Õ': 'Õ',
    'Ö': 'Ö',
    '×': '×',
    'Ø': 'Ø',
    'Ù': 'Ù',
    'Ú': 'Ú',
    'Û': 'Û',
    'Ü': 'Ü',
    'Ý': 'Ý',
    'Þ': 'Þ',
    'ß': 'ß',
    '÷': '÷',
    'Ÿ': 'Ÿ',
};
const menu = {
    'Menu/File/New': { path: ['File', 'New Document'], shortcut: { key: 'N', modifiers: ['Ctrl', ] } },
    'Menu/File/Open...': { path: ['File', 'Open Document...'], shortcut: { key: 'O', modifiers: ['Ctrl', ] } },
    'Menu/File/Save': { path: ['File', 'Save Document'], shortcut: { key: 'S', modifiers: ['Ctrl', ] } },
    'Menu/File/Save as...': { path: ['File', 'Save Document as...'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Revert': { path: ['File', 'Revert'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Export/Wavefront OBJ...': { path: ['File', 'Export', 'Wavefront OBJ...'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Export/Map...': { path: ['File', 'Export', 'Map...'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Load Point File...': { path: ['File', 'Load Point File...'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Reload Point File': { path: ['File', 'Reload Point File'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Unload Point File': { path: ['File', 'Unload Point File'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Load Portal File...': { path: ['File', 'Load Portal File...'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Reload Portal File': { path: ['File', 'Reload Portal File'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Unload Portal File': { path: ['File', 'Unload Portal File'], shortcut: { key: '', modifiers: [] } },
    'Menu/File/Reload Texture Collections': { path: ['File', 'Reload Texture Collections'], shortcut: { key: 'F5', modifiers: [] } },
    'Menu/File/Reload Entity Definitions': { path: ['File', 'Reload Entity Definitions'], shortcut: { key: 'F6', modifiers: [] } },
    'Menu/File/Close': { path: ['File', 'Close Document'], shortcut: { key: 'F4', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Undo': { path: ['Edit', 'Undo'], shortcut: { key: 'Z', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Redo': { path: ['Edit', 'Redo'], shortcut: { key: 'Y', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Repeat': { path: ['Edit', 'Repeat Last Commands'], shortcut: { key: 'R', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Clear Repeatable Commands': { path: ['Edit', 'Clear Repeatable Commands'], shortcut: { key: 'R', modifiers: ['Ctrl', 'Shift', ] } },
    'Menu/Edit/Cut': { path: ['Edit', 'Cut'], shortcut: { key: 'X', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Copy': { path: ['Edit', 'Copy'], shortcut: { key: 'C', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Paste': { path: ['Edit', 'Paste'], shortcut: { key: 'V', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Paste at Original Position': { path: ['Edit', 'Paste at Original Position'], shortcut: { key: 'V', modifiers: ['Ctrl', 'Alt', ] } },
    'Menu/Edit/Duplicate': { path: ['Edit', 'Duplicate'], shortcut: { key: 'D', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Delete': { path: ['Edit', 'Delete'], shortcut: { key: 'Del', modifiers: [] } },
    'Menu/Edit/Select All': { path: ['Edit', 'Select All'], shortcut: { key: 'A', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Select Siblings': { path: ['Edit', 'Select Siblings'], shortcut: { key: 'B', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Select Touching': { path: ['Edit', 'Select Touching'], shortcut: { key: 'T', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Select Inside': { path: ['Edit', 'Select Inside'], shortcut: { key: 'E', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Select Tall': { path: ['Edit', 'Select Tall'], shortcut: { key: 'E', modifiers: ['Ctrl', 'Shift', ] } },
    'Menu/Edit/Select by Line Number': { path: ['Edit', 'Select by Line Number...'], shortcut: { key: '', modifiers: [] } },
    'Menu/Edit/Select Inverse': { path: ['Edit', 'Select Inverse'], shortcut: { key: 'A', modifiers: ['Ctrl', 'Alt', ] } },
    'Menu/Edit/Select None': { path: ['Edit', 'Select None'], shortcut: { key: 'A', modifiers: ['Ctrl', 'Shift', ] } },
    'Menu/Edit/Group': { path: ['Edit', 'Group Selected Objects'], shortcut: { key: 'G', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Ungroup': { path: ['Edit', 'Ungroup Selected Objects'], shortcut: { key: 'G', modifiers: ['Ctrl', 'Shift', ] } },
    'Controls/Map view/Flip objects horizontally': { path: ['Edit', 'Flip Horizontally'], shortcut: { key: 'F', modifiers: ['Ctrl', ] } },
    'Controls/Map view/Flip objects vertically': { path: ['Edit', 'Flip Vertically'], shortcut: { key: 'F', modifiers: ['Ctrl', 'Alt', ] } },
    'Menu/Edit/Tools/Brush Tool': { path: ['Edit', 'Tools', 'Brush Tool'], shortcut: { key: 'B', modifiers: [] } },
    'Menu/Edit/Tools/Clip Tool': { path: ['Edit', 'Tools', 'Clip Tool'], shortcut: { key: 'C', modifiers: [] } },
    'Menu/Edit/Tools/Rotate Tool': { path: ['Edit', 'Tools', 'Rotate Tool'], shortcut: { key: 'R', modifiers: [] } },
    'Menu/Edit/Tools/Scale Tool': { path: ['Edit', 'Tools', 'Scale Tool'], shortcut: { key: 'T', modifiers: [] } },
    'Menu/Edit/Tools/Shear Tool': { path: ['Edit', 'Tools', 'Shear Tool'], shortcut: { key: 'G', modifiers: [] } },
    'Menu/Edit/Tools/Vertex Tool': { path: ['Edit', 'Tools', 'Vertex Tool'], shortcut: { key: 'V', modifiers: [] } },
    'Menu/Edit/Tools/Edge Tool': { path: ['Edit', 'Tools', 'Edge Tool'], shortcut: { key: 'E', modifiers: [] } },
    'Menu/Edit/Tools/Face Tool': { path: ['Edit', 'Tools', 'Face Tool'], shortcut: { key: 'F', modifiers: [] } },
    'Controls/Map view/Deactivate current tool': { path: ['Edit', 'Tools', 'Deactivate Current Tool'], shortcut: { key: 'Esc', modifiers: ['Ctrl', ] } },
    'Menu/Edit/CSG/Convex Merge': { path: ['Edit', 'CSG', 'Convex Merge'], shortcut: { key: 'J', modifiers: ['Ctrl', ] } },
    'Menu/Edit/CSG/Subtract': { path: ['Edit', 'CSG', 'Subtract'], shortcut: { key: 'K', modifiers: ['Ctrl', ] } },
    'Menu/Edit/CSG/Hollow': { path: ['Edit', 'CSG', 'Hollow'], shortcut: { key: 'K', modifiers: ['Ctrl', 'Shift', ] } },
    'Menu/Edit/CSG/Intersect': { path: ['Edit', 'CSG', 'Intersect'], shortcut: { key: 'L', modifiers: ['Ctrl', ] } },
    'Menu/Edit/Snap Vertices to Integer': { path: ['Edit', 'Snap Vertices to Integer'], shortcut: { key: 'V', modifiers: ['Ctrl', 'Shift', ] } },
    'Menu/Edit/Snap Vertices to Grid': { path: ['Edit', 'Snap Vertices to Grid'], shortcut: { key: 'V', modifiers: ['Ctrl', 'Alt', 'Shift', ] } },
    'Menu/Edit/Texture Lock': { path: ['Edit', 'Texture Lock'], shortcut: { key: '', modifiers: [] } },
    'Menu/Edit/UV Lock': { path: ['Edit', 'UV Lock'], shortcut: { key: 'U', modifiers: [] } },
    'Menu/Edit/Replace Texture...': { path: ['Edit', 'Replace Texture...'], shortcut: { key: '', modifiers: [] } },
    'Menu/View/Grid/Show Grid': { path: ['View', 'Grid', 'Show Grid'], shortcut: { key: '0', modifiers: [] } },
    'Menu/View/Grid/Snap to Grid': { path: ['View', 'Grid', 'Snap to Grid'], shortcut: { key: '0', modifiers: ['Alt', ] } },
    'Menu/View/Grid/Increase Grid Size': { path: ['View', 'Grid', 'Increase Grid Size'], shortcut: { key: '+', modifiers: [] } },
    'Menu/View/Grid/Decrease Grid Size': { path: ['View', 'Grid', 'Decrease Grid Size'], shortcut: { key: '-', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 0.125': { path: ['View', 'Grid', 'Set Grid Size 0.125'], shortcut: { key: '', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 0.25': { path: ['View', 'Grid', 'Set Grid Size 0.25'], shortcut: { key: '', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 0.5': { path: ['View', 'Grid', 'Set Grid Size 0.5'], shortcut: { key: '', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 1': { path: ['View', 'Grid', 'Set Grid Size 1'], shortcut: { key: '1', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 2': { path: ['View', 'Grid', 'Set Grid Size 2'], shortcut: { key: '2', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 4': { path: ['View', 'Grid', 'Set Grid Size 4'], shortcut: { key: '3', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 8': { path: ['View', 'Grid', 'Set Grid Size 8'], shortcut: { key: '4', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 16': { path: ['View', 'Grid', 'Set Grid Size 16'], shortcut: { key: '5', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 32': { path: ['View', 'Grid', 'Set Grid Size 32'], shortcut: { key: '6', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 64': { path: ['View', 'Grid', 'Set Grid Size 64'], shortcut: { key: '7', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 128': { path: ['View', 'Grid', 'Set Grid Size 128'], shortcut: { key: '8', modifiers: [] } },
    'Menu/View/Grid/Set Grid Size 256': { path: ['View', 'Grid', 'Set Grid Size 256'], shortcut: { key: '9', modifiers: [] } },
    'Menu/View/Camera/Move to Next Point': { path: ['View', 'Camera', 'Move Camera to Next Point'], shortcut: { key: '.', modifiers: [] } },
    'Menu/View/Camera/Move to Previous Point': { path: ['View', 'Camera', 'Move Camera to Previous Point'], shortcut: { key: ',', modifiers: [] } },
    'Menu/View/Camera/Focus on Selection': { path: ['View', 'Camera', 'Focus Camera on Selection'], shortcut: { key: 'U', modifiers: ['Ctrl', ] } },
    'Menu/View/Camera/Move Camera to...': { path: ['View', 'Camera', 'Move Camera to...'], shortcut: { key: '', modifiers: [] } },
    'Menu/View/Isolate': { path: ['View', 'Isolate Selection'], shortcut: { key: 'I', modifiers: ['Ctrl', ] } },
    'Menu/View/Hide': { path: ['View', 'Hide Selection'], shortcut: { key: 'I', modifiers: ['Ctrl', 'Alt', ] } },
    'Menu/View/Show All': { path: ['View', 'Show All'], shortcut: { key: 'I', modifiers: ['Ctrl', 'Shift', ] } },
    'Menu/View/Switch to Map Inspector': { path: ['View', 'Show Map Inspector'], shortcut: { key: '1', modifiers: ['Ctrl', ] } },
    'Menu/View/Switch to Entity Inspector': { path: ['View', 'Show Entity Inspector'], shortcut: { key: '2', modifiers: ['Ctrl', ] } },
    'Menu/View/Switch to Face Inspector': { path: ['View', 'Show Face Inspector'], shortcut: { key: '3', modifiers: ['Ctrl', ] } },
    'Menu/View/Toggle Toolbar': { path: ['View', 'Toggle Toolbar'], shortcut: { key: 'T', modifiers: ['Ctrl', 'Alt', ] } },
    'Menu/View/Toggle Info Panel': { path: ['View', 'Toggle Info Panel'], shortcut: { key: '4', modifiers: ['Ctrl', ] } },
    'Menu/View/Toggle Inspector': { path: ['View', 'Toggle Inspector'], shortcut: { key: '5', modifiers: ['Ctrl', ] } },
    'Menu/View/Maximize Current View': { path: ['View', 'Maximize Current View'], shortcut: { key: 'Space', modifiers: ['Ctrl', ] } },
    'Menu/File/Preferences...': { path: ['View', 'Preferences...'], shortcut: { key: '', modifiers: [] } },
    'Menu/Run/Compile...': { path: ['Run', 'Compile Map...'], shortcut: { key: '', modifiers: [] } },
    'Menu/Run/Launch...': { path: ['Run', 'Launch Engine...'], shortcut: { key: '', modifiers: [] } },
    'Menu/Help/TrenchBroom Manual': { path: ['Help', 'TrenchBroom Manual'], shortcut: { key: 'F1', modifiers: [] } },
    'Menu/File/About TrenchBroom': { path: ['Help', 'About TrenchBroom'], shortcut: { key: '', modifiers: [] } },
};
const actions = {
    'Controls/Map view/Deactivate current tool': { key: 'Esc', modifiers: ['Ctrl', ] },
    'Menu/Edit/Tools/Brush Tool': { key: 'B', modifiers: [] },
    'Menu/Edit/Tools/Clip Tool': { key: 'C', modifiers: [] },
    'Menu/Edit/Tools/Vertex Tool': { key: 'V', modifiers: [] },
    'Menu/Edit/Tools/Edge Tool': { key: 'E', modifiers: [] },
    'Menu/Edit/Tools/Face Tool': { key: 'F', modifiers: [] },
    'Menu/Edit/Tools/Rotate Tool': { key: 'R', modifiers: [] },
    'Menu/Edit/Tools/Scale Tool': { key: 'T', modifiers: [] },
    'Menu/Edit/Tools/Shear Tool': { key: 'G', modifiers: [] },
    'Menu/Edit/Duplicate': { key: 'D', modifiers: ['Ctrl', ] },
    'Controls/Map view/Flip objects horizontally': { key: 'F', modifiers: ['Ctrl', ] },
    'Controls/Map view/Flip objects vertically': { key: 'F', modifiers: ['Ctrl', 'Alt', ] },
    'Menu/Edit/Texture Lock': { key: '', modifiers: [] },
    'Menu/Edit/UV Lock': { key: 'U', modifiers: [] },
    'Controls/Map view/Cancel': { key: 'Esc', modifiers: [] },
    'Controls/Map view/Create brush': { key: 'Return', modifiers: [] },
    'Controls/Map view/Cycle map view': { key: 'Space', modifiers: [] },
    'Controls/Map view/Duplicate and move objects backward; Duplicate and move objects up': { key: 'PgUp', modifiers: ['Ctrl', ] },
    'Controls/Map view/Duplicate and move objects down; Duplicate and move objects backward': { key: 'Down', modifiers: ['Ctrl', ] },
    'Controls/Map view/Duplicate and move objects forward; Duplicate and move objects down': { key: 'PgDown', modifiers: ['Ctrl', ] },
    'Controls/Map view/Duplicate and move objects left': { key: 'Left', modifiers: ['Ctrl', ] },
    'Controls/Map view/Duplicate and move objects right': { key: 'Right', modifiers: ['Ctrl', ] },
    'Controls/Map view/Duplicate and move objects up; Duplicate and move objects forward': { key: 'Up', modifiers: ['Ctrl', ] },
    'Controls/Map view/Flip textures horizontally': { key: 'F', modifiers: ['Ctrl', ] },
    'Controls/Map view/Flip textures vertically': { key: 'F', modifiers: ['Ctrl', 'Alt', ] },
    'Controls/Map view/Make structural': { key: 'S', modifiers: ['Alt', ] },
    'Controls/Map view/Move objects backward; Move objects up': { key: 'PgUp', modifiers: [] },
    'Controls/Map view/Move objects down; Move objects backward': { key: 'Down', modifiers: [] },
    'Controls/Map view/Move objects forward; Move objects down': { key: 'PgDown', modifiers: [] },
    'Controls/Map view/Move objects left': { key: 'Left', modifiers: [] },
    'Controls/Map view/Move objects right': { key: 'Right', modifiers: [] },
    'Controls/Map view/Move objects up; Move objects forward': { key: 'Up', modifiers: [] },
    'Controls/Map view/Move textures down': { key: 'Down', modifiers: [] },
    'Controls/Map view/Move textures down (coarse)': { key: 'Down', modifiers: ['Shift', ] },
    'Controls/Map view/Move textures down (fine)': { key: 'Down', modifiers: ['Ctrl', ] },
    'Controls/Map view/Move textures left': { key: 'Left', modifiers: [] },
    'Controls/Map view/Move textures left (coarse)': { key: 'Left', modifiers: ['Shift', ] },
    'Controls/Map view/Move textures left (fine)': { key: 'Left', modifiers: ['Ctrl', ] },
    'Controls/Map view/Move textures right': { key: 'Right', modifiers: [] },
    'Controls/Map view/Move textures right (coarse)': { key: 'Right', modifiers: ['Shift', ] },
    'Controls/Map view/Move textures right (fine)': { key: 'Right', modifiers: ['Ctrl', ] },
    'Controls/Map view/Move textures up': { key: 'Up', modifiers: [] },
    'Controls/Map view/Move textures up (coarse)': { key: 'Up', modifiers: ['Shift', ] },
    'Controls/Map view/Move textures up (fine)': { key: 'Up', modifiers: ['Ctrl', ] },
    'Controls/Map view/Perform clip': { key: 'Return', modifiers: [] },
    'Controls/Map view/Pitch objects clockwise': { key: 'PgUp', modifiers: ['Alt', ] },
    'Controls/Map view/Pitch objects counter-clockwise': { key: 'PgDown', modifiers: ['Alt', ] },
    'Controls/Map view/Reset camera zoom': { key: 'Esc', modifiers: ['Shift', ] },
    'Controls/Map view/Reset texture alignment': { key: 'R', modifiers: ['Shift', ] },
    'Controls/Map view/Reset texture alignment to world aligned': { key: 'R', modifiers: ['Alt', 'Shift', ] },
    'Controls/Map view/Reveal in texture browser': { key: '', modifiers: [] },
    'Controls/Map view/Roll objects clockwise': { key: 'Up', modifiers: ['Alt', ] },
    'Controls/Map view/Roll objects counter-clockwise': { key: 'Down', modifiers: ['Alt', ] },
    'Controls/Map view/Rotate textures clockwise': { key: 'PgUp', modifiers: [] },
    'Controls/Map view/Rotate textures clockwise (coarse)': { key: 'PgUp', modifiers: ['Shift', ] },
    'Controls/Map view/Rotate textures clockwise (fine)': { key: 'PgUp', modifiers: ['Ctrl', ] },
    'Controls/Map view/Rotate textures counter-clockwise': { key: 'PgDown', modifiers: [] },
    'Controls/Map view/Rotate textures counter-clockwise (coarse)': { key: 'PgDown', modifiers: ['Shift', ] },
    'Controls/Map view/Rotate textures counter-clockwise (fine)': { key: 'PgDown', modifiers: ['Ctrl', ] },
    'Controls/Map view/Toggle clip side': { key: 'Return', modifiers: ['Ctrl', ] },
    'Controls/Map view/View Filter > Hide entity links': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Hide faces': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Hide textures': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Shade faces': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Show all entity links': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Show directly selected entity links': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Show edges': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Show textures': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Show transitively selected entity links': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Toggle show brush entity bounds': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Toggle show brushes': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Toggle show entity classnames': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Toggle show group bounds': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Toggle show point entities': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Toggle show point entity bounds': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Toggle show point entity models': { key: '', modifiers: [] },
    'Controls/Map view/View Filter > Use fog': { key: '', modifiers: [] },
    'Controls/Map view/Yaw objects clockwise': { key: 'Left', modifiers: ['Alt', ] },
    'Controls/Map view/Yaw objects counter-clockwise': { key: 'Right', modifiers: ['Alt', ] },
    'Controls/Camera/Move forward': { key: 'W', modifiers: [] },
    'Controls/Camera/Move backward': { key: 'S', modifiers: [] },
    'Controls/Camera/Move left': { key: 'A', modifiers: [] },
    'Controls/Camera/Move right': { key: 'D', modifiers: [] },
    'Controls/Camera/Move up': { key: 'Q', modifiers: [] },
    'Controls/Camera/Move down': { key: 'X', modifiers: [] },
};
