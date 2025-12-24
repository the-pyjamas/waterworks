"use strict";

/* Basic Tagify */
// The DOM element you wish to replace with Tagify
var inputtagify = document.querySelector('input[name=basic]');

// initialize Tagify on the above input node reference
new Tagify(inputtagify)
/* Basic Tagify */

/* Readonly Tags */
var input = document.querySelector('input[name=tags4]'),
    tagify = new Tagify(input);
/* Readonly Tags */

/* Readonly Mix */
var input = document.querySelector('input[name=tags-readonly-mix]'),
    tagify = new Tagify(input);
/* Readonly Mix */

/* Tagify With Custom Suggestions */
var inputCustom = document.querySelector('input[name="input-custom-dropdown"]'),
    // init Tagify script on the above inputs
    tagify = new Tagify(inputCustom, {
        whitelist: ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "Avicsoft", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "Apex (Salesforce.com)", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "Active Server Pages", "ASP.NET", "B", "Babbage", "Bash", "BASIC", "bc", "BCPL", "BeanShell", "Batch (Windows/Dos)", "Bertrand", "BETA", "Bigwig", "Bistro", "BitC", "BLISS", "Blockly", "BlooP", "Blue", "Boo", "Boomerang", "Bourne shell (including bash and ksh)", "BREW", "BPEL", "B", "C--", "C++ – ISO/IEC 14882", "C# – ISO/IEC 23270", "C/AL", "Caché ObjectScript", "C Shell", "Caml", "Cayenne", "CDuce", "Cecil", "Cesil", "Céu", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk", "Citrine (programming language)", "CL (IBM)", "Claire", "Clarion", "Clean", "Clipper", "CLIPS", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL – ISO/IEC 1989", "CobolScript – COBOL Scripting language", "Cobra", "CODE", "CoffeeScript", "ColdFusion", "COMAL", "Combined Programming Language (CPL)", "COMIT", "Common Intermediate Language (CIL)", "Common Lisp (also known as CL)", "COMPASS", "Component Pascal", "Constraint Handling Rules (CHR)", "COMTRAN", "Converge", "Cool", "Coq", "Coral 66", "Corn", "CorVision", "COWSEL", "CPL", "CPL", "Cryptol", "csh", "Csound", "CSP", "CUDA", "Curl", "Curry", "Cybil", "Cyclone", "Cython", "Java", "Javascript", "M2001", "M4", "M#", "Machine code", "MAD (Michigan Algorithm Decoder)", "MAD/I", "Magik", "Magma", "make", "Maple", "MAPPER now part of BIS", "MARK-IV now VISION:BUILDER", "Mary", "MASM Microsoft Assembly x86", "MATH-MATIC", "Mathematica", "MATLAB", "Maxima (see also Macsyma)", "Max (Max Msp – Graphical Programming Environment)", "Maya (MEL)", "MDL", "Mercury", "Mesa", "Metafont", "Microcode", "MicroScript", "MIIS", "Milk (programming language)", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "Mathcad", "MSIL – deprecated name for CIL", "MSL", "MUMPS", "Mystic Programming L"],
        maxTags: 10,
        dropdown: {
            maxItems: 20,           // <- mixumum allowed rendered suggestions
            classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
            enabled: 0,             // <- show suggestions on focus
            closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
        }
    })
/* Tagify With Custom Suggestions */

/* Tagify With Disabled User Input */
var inputDisabled = document.querySelector('input[name=tags-disabled-user-input]');
new Tagify(inputDisabled, {
    whitelist: [1, 2, 3, 4, 5],
    userInput: false
})
/* Tagify With Disabled User Input */

/* Tagify With Drag & Sort */
var input = document.querySelector('input[name=drag-sort]'),
    tagify = new Tagify(input);

// using 3-party script "dragsort"
// https://github.com/yairEO/dragsort
var dragsort = new DragSort(tagify.DOM.scope, {
    selector: '.' + tagify.settings.classNames.tag,
    callbacks: {
        dragEnd: onDragEnd
    }
})
function onDragEnd(elm) {
    tagify.updateValueByDOMTags()
}
/* Tagify With Drag & Sort */

/* Tagify Single-Value Select */
var input = document.querySelector('input[name=tags-select-mode]'),
    tagify = new Tagify(input, {
        enforceWhitelist: true,
        mode: "select",
        whitelist: ["first option", "second option", "third option"],
        blacklist: ['foo', 'bar'],
    })

// bind events
tagify.on('add', onAddTag)
tagify.DOM.input.addEventListener('focus', onSelectFocus)

function onAddTag(e) {
    console.log(e.detail)
}

function onSelectFocus(e) {
    console.log(e)
}
/* Tagify Single-Value Select */

/* Tagify With Mix Text & Tags */
// Define two types of whitelists, each used for the dropdown suggestions menu,
// depending on the prefix pattern typed (@/#). See settings below.
var whitelist_1 = [
    { value: 100, text: 'kenny', title: 'Kenny McCormick' },
    { value: 200, text: 'cartman', title: 'Eric Cartman' },
    { value: 300, text: 'kyle', title: 'Kyle Broflovski' },
    { value: 400, text: 'token', title: 'Token Black' },
    { value: 500, text: 'jimmy', title: 'Jimmy Valmer' },
    { value: 600, text: 'butters', title: 'Butters Stotch' },
    { value: 700, text: 'stan', title: 'Stan Marsh' },
    { value: 800, text: 'randy', title: 'Randy Marsh' },
    { value: 900, text: 'Mr. Garrison', title: 'POTUS' },
    { value: 1000, text: 'Mr. Mackey', title: "M'Kay" }
]

// Second whitelist, which is shown only when starting to type "#".
// Below whitelist is the simplest possible format.
var whitelist_2 = ['Homer simpson', 'Marge simpson', 'Bart', 'Lisa', 'Maggie', 'Mr. Burns', 'Ned', 'Milhouse', 'Moe'];


// initialize Tagify
var input = document.querySelector('[name=mix]'),
    // init Tagify script on the above inputs
    tagify = new Tagify(input, {
        //  mixTagsInterpolator: ["{{", "}}"],
        mode: 'mix',  // <--  Enable mixed-content
        pattern: /@|#/,  // <--  Text starting with @ or # (if single, String can be used here)
        tagTextProp: 'text',  // <-- the default property (from whitelist item) for the text to be rendered in a tag element.
        // Array for initial interpolation, which allows only these tags to be used
        whitelist: whitelist_1.concat(whitelist_2).map(function (item) {
            return typeof item == 'string' ? { value: item } : item
        }),

        // custom validation - no special characters
        validate(data) {
            return !/[^a-zA-Z0-9 ]/.test(data.value)
        },

        dropdown: {
            enabled: 1,
            position: 'text', // <-- render the suggestions list next to the typed text ("caret")
            mapValueTo: 'text', // <-- similar to above "tagTextProp" setting, but for the dropdown items
            highlightFirst: true  // automatically highlights first sugegstion item in the dropdown
        },
        callbacks: {
            add: console.log,  // callback when adding a tag
            remove: console.log   // callback when removing a tag
        }
    })


// A good place to pull server suggestion list accoring to the prefix/value
tagify.on('input', function (e) {
    var prefix = e.detail.prefix;

    // first, clean the whitlist array, because the below code, while not, might be async,
    // therefore it should be up to you to decide WHEN to render the suggestions dropdown
    // tagify.settings.whitelist.length = 0;

    if (prefix) {
        if (prefix == '@')
            tagify.whitelist = whitelist_1;

        if (prefix == '#')
            tagify.whitelist = whitelist_2;

        if (e.detail.value.length > 1)
            tagify.dropdown.show(e.detail.value);
    }

    console.log(tagify.value)
    console.log('mix-mode "input" event value: ', e.detail)
})

tagify.on('add', function (e) {
    console.log(e)
})
/* Tagify With Mix Text & Tags */

/* Tagify With User List Tags */
var inputElm = document.querySelector('input[name=users-list-tags]');

function tagTemplate(tagData) {
    return `
        <tag title="${tagData.email}"
                contenteditable='false'
                spellcheck='false'
                tabIndex="-1"
                class="tagify__tag ${tagData.class ? tagData.class : ""}"
                ${this.getAttributes(tagData)}>
            <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
            <div>
                <div class='tagify__tag__avatar-wrap'>
                    <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
                </div>
                <span class='tagify__tag-text'>${tagData.name}</span>
            </div>
        </tag>
    `
}

function suggestionItemTemplate(tagData) {
    return `
        <div ${this.getAttributes(tagData)}
            class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
            tabindex="0"
            role="option">
            ${tagData.avatar ? `
                <div class='tagify__dropdown__item__avatar-wrap'>
                    <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
                </div>` : ''
        }
            <strong>${tagData.name}</strong>
            <span>${tagData.email}</span>
        </div>
    `
}

function dropdownHeaderTemplate(suggestions) {
    return `
        <header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownItem} ${this.settings.classNames.dropdownItem}__addAll">
            <strong style='grid-area: add'>${this.value.length ? `Add Remaning` : 'Add All'}</strong>
            <span style='grid-area: remaning'>${suggestions.length} members</span>
            <a class='remove-all-tags'>Remove all</a>
        </header>
    `
}

// initialize Tagify on the above input node reference
var tagify = new Tagify(inputElm, {
    tagTextProp: 'name', // very important since a custom template is used with this property as text
    // enforceWhitelist: true,
    skipInvalid: true, // do not remporarily add invalid tags
    dropdown: {
        closeOnSelect: false,
        enabled: 0,
        classname: 'users-list',
        searchKeys: ['name', 'email']  // very important to set by which keys to search for suggesttions when typing
    },
    templates: {
        tag: tagTemplate,
        dropdownItem: suggestionItemTemplate,
        dropdownHeader: dropdownHeaderTemplate
    },
        whitelist: [
            {
                "value": 1,
                "name": "جاستینین هترزلی",
                "avatar": "https://i.pravatar.cc/80?img=1",
                "email": "jhattersley0@ucsd.edu",
                "team": "تیم الف"
            },
            {
                "value": 2,
                "name": "آنتونز اسون",
                "avatar": "https://i.pravatar.cc/80?img=2",
                "email": "aesson1@ning.com",
                "team": "تیم ب"
            },
            {
                "value": 3,
                "name": "آردین باتیس",
                "avatar": "https://i.pravatar.cc/80?img=3",
                "email": "abatisse2@nih.gov",
                "team": "تیم الف"
            },
            {
                "value": 4,
                "name": "گرایم یلولی",
                "avatar": "https://i.pravatar.cc/80?img=4",
                "email": "gyellowley3@behance.net",
                "team": "تیم ج"
            },
            {
                "value": 5,
                "name": "دایدو ویلفورد",
                "avatar": "https://i.pravatar.cc/80?img=5",
                "email": "dwilford4@jugem.jp",
                "team": "تیم الف"
            },
            {
                "value": 6,
                "name": "سلستا اوروین",
                "avatar": "https://i.pravatar.cc/80?img=6",
                "email": "corwin5@meetup.com",
                "team": "تیم ج"
            },
            {
                "value": 7,
                "name": "سالی مین",
                "avatar": "https://i.pravatar.cc/80?img=7",
                "email": "smain6@techcrunch.com",
                "team": "تیم الف"
            },
            {
                "value": 8,
                "name": "گرتل هیزمن",
                "avatar": "https://i.pravatar.cc/80?img=8",
                "email": "ghaysman7@mashable.com",
                "team": "تیم ب"
            },
            {
                "value": 9,
                "name": "ماروین مندریک",
                "avatar": "https://i.pravatar.cc/80?img=9",
                "email": "mmandrake8@sourceforge.net",
                "team": "تیم ب"
            },
            {
                "value": 10,
                "name": "کوری تیدی",
                "avatar": "https://i.pravatar.cc/80?img=10",
                "email": "ctidey9@youtube.com",
                "team": "تیم الف"
            },
            {
                "value": 11,
                "name": "فو",
                "avatar": "https://i.pravatar.cc/80?img=11",
                "email": "foo@bar.com",
                "team": "تیم ب"
            },
            {
                "value": 12,
                "name": "فو",
                "avatar": "https://i.pravatar.cc/80?img=12",
                "email": "foo.aaa@foo.com",
                "team": "تیم الف"
            }
        ],

    transformTag: (tagData, originalData) => {
        var { name, email } = parseFullValue(tagData.name)
        tagData.name = name
        tagData.email = email || tagData.email
    },

    validate({ name, email }) {
        // when editing a tag, there will only be the "name" property which contains name + email (see 'transformTag' above)
        if (!email && name) {
            var parsed = parseFullValue(name)
            name = parsed.name
            email = parsed.email
        }

        if (!name) return "Missing name"
        if (!validateEmail(email)) return "Invalid email"

        return true
    }
})

// The below code is printed as escaped, so please copy this function from:
// https://github.com/yairEO/tagify/blob/master/src/parts/helpers.js#L89-L97
// function escapeHTML(s) {
//     return typeof s == 'string' ? s
//         .replace(/&/g, "&")
//         .replace(/</g, "<")
//         .replace(/>/g, ">")
//         .replace(/"/g, """)
//             .replace(/`|'/g, "'")
//     : s;
// }

// The below part is only if you want to split the users into groups, when rendering the suggestions list dropdown:
// (since each user also has a 'team' property)
tagify.dropdown.createListHTML = sugegstionsList => {
    const teamsOfUsers = sugegstionsList.reduce((acc, suggestion) => {
        const team = suggestion.team || 'Not Assigned';

        if (!acc[team])
            acc[team] = [suggestion]
        else
            acc[team].push(suggestion)

        return acc
    }, {})

    const getUsersSuggestionsHTML = teamUsers => teamUsers.map((suggestion, idx) => {
        if (typeof suggestion == 'string' || typeof suggestion == 'number')
            suggestion = { value: suggestion }

        var value = tagify.dropdown.getMappedValue.call(tagify, suggestion)

        suggestion.value = value && typeof value == 'string' ? escapeHTML(value) : value

        return tagify.settings.templates.dropdownItem.apply(tagify, [suggestion]);
    }).join("")


    // assign the user to a group
    return Object.entries(teamsOfUsers).map(([team, teamUsers]) => {
        return `<div class="tagify__dropdown__itemsGroup" data-title="Team ${team}:">${getUsersSuggestionsHTML(teamUsers)}</div>`
    }).join("")
}

// attach events listeners
tagify.on('dropdown:select', onSelectSuggestion) // allows selecting all the suggested (whitelist) items
    .on('edit:start', onEditStart)  // show custom text in the tag while in edit-mode

function onSelectSuggestion(e) {
    if (e.detail.event.target.matches('.remove-all-tags')) {
        tagify.removeAllTags()
    }

    // custom class from "dropdownHeaderTemplate"
    else if (e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`))
        tagify.dropdown.selectAll();
}

function onEditStart({ detail: { tag, data } }) {
    tagify.setTagTextNode(tag, `${data.name} <${data.email}>`)
}

// https://stackoverflow.com/a/9204568/104380
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function parseFullValue(value) {
    // https://stackoverflow.com/a/11592042/104380
    var parts = value.split(/<(.*?)>/g),
        name = parts[0].trim(),
        email = parts[1]?.replace(/<(.*?)>/g, '').trim();

    return { name, email }
}
/* Tagify With User List Tags */
