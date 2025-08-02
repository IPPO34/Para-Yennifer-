const a0_0x19d3d4 = a0_0x3993;
(function(_0x12c7f3, _0x3ecada) {
    const _0x583649 = a0_0x3993
      , _0x142941 = _0x12c7f3();
    while (!![]) {
        try {
            const _0x28825c = -parseInt(_0x583649(0xd8)) / 0x1 + -parseInt(_0x583649(0xd6)) / 0x2 * (parseInt(_0x583649(0x163)) / 0x3) + -parseInt(_0x583649(0xf4)) / 0x4 + parseInt(_0x583649(0x92)) / 0x5 * (-parseInt(_0x583649(0x13f)) / 0x6) + parseInt(_0x583649(0xf0)) / 0x7 * (-parseInt(_0x583649(0x160)) / 0x8) + -parseInt(_0x583649(0xf9)) / 0x9 * (-parseInt(_0x583649(0x116)) / 0xa) + parseInt(_0x583649(0xdd)) / 0xb;
            if (_0x28825c === _0x3ecada)
                break;
            else
                _0x142941['push'](_0x142941['shift']());
        } catch (_0x3af1ba) {
            _0x142941['push'](_0x142941['shift']());
        }
    }
}(a0_0x441e, 0x1f031));
const settingsButton = document['getElementById'](a0_0x19d3d4(0x138))
  , settingsModal = document[a0_0x19d3d4(0x174)]('settingsModal')
  , closeModal = document[a0_0x19d3d4(0x128)](a0_0x19d3d4(0xe8));
let pages = [];
const applySettingsButton = document['getElementById'](a0_0x19d3d4(0xa3));
let settings = {
    'music': './music/happy-birthday.mp3',
    'countdown': 0x3,
    'matrixText': a0_0x19d3d4(0x117),
    'matrixColor1': a0_0x19d3d4(0x147),
    'matrixColor2': a0_0x19d3d4(0x13a),
    'sequence': a0_0x19d3d4(0x16b),
    'sequenceColor': a0_0x19d3d4(0x143),
    'gift': './gif/Cat\x20Love\x20GIF\x20by\x20KIKI.gif',
    'pages': [],
    'enableBook': ![],
    'enableHeart': ![]
};
const musicOptions = [{
    'value': a0_0x19d3d4(0x99),
    'label': a0_0x19d3d4(0xd9)
}, {
    'value': a0_0x19d3d4(0x172),
    'label': 'Happy\x20Birthday\x20(Độ\x20Mixi)'
}, {
    'value': a0_0x19d3d4(0xb7),
    'label': a0_0x19d3d4(0xf7)
}, {
    'value': a0_0x19d3d4(0xc6),
    'label': 'Happy\x20Birthday'
}, {
    'value': a0_0x19d3d4(0x119),
    'label': a0_0x19d3d4(0x112)
}, {
    'value': './music/podcardnu.mp3',
    'label': a0_0x19d3d4(0x105)
}, {
    'value': './music/suynghitronganh.mp3',
    'label': a0_0x19d3d4(0x15d)
}, {
    'value': a0_0x19d3d4(0x14a),
    'label': a0_0x19d3d4(0xac)
}, {
    'value': './music/lambantraianhe.mp3',
    'label': 'Làm\x20bạn\x20trai\x20anh\x20nhé'
}, {
    'value': a0_0x19d3d4(0x125),
    'label': a0_0x19d3d4(0x123)
}, {
    'value': a0_0x19d3d4(0x122),
    'label': a0_0x19d3d4(0x150)
}, {
    'value': a0_0x19d3d4(0xce),
    'label': a0_0x19d3d4(0xc0)
}]
  , gifOptions = [{
    'value': '',
    'label': a0_0x19d3d4(0x12c)
}, {
    'value': a0_0x19d3d4(0x12f),
    'label': a0_0x19d3d4(0x10c)
}, {
    'value': './gif/Cat\x20Love\x20GIF\x20by\x20KIKI.gif',
    'label': a0_0x19d3d4(0xa8)
}, {
    'value': a0_0x19d3d4(0x11a),
    'label': a0_0x19d3d4(0x96)
}, {
    'value': './gif/happy2.gif',
    'label': a0_0x19d3d4(0x115)
}, {
    'value': a0_0x19d3d4(0x153),
    'label': 'Gif5'
}];
function resetWebsiteState() {
    const _0x2eee5 = a0_0x19d3d4
      , _0x17f32d = document[_0x2eee5(0x174)](_0x2eee5(0xb2))
      , _0x407be6 = document[_0x2eee5(0x128)](_0x2eee5(0x127))
      , _0xd788ce = document[_0x2eee5(0x128)](_0x2eee5(0x106))
      , _0x1da75b = document['getElementById'](_0x2eee5(0x14e))
      , _0x4c2dae = document[_0x2eee5(0x174)](_0x2eee5(0xc3))
      , _0x553c54 = document[_0x2eee5(0x174)](_0x2eee5(0xd5))
      , _0x5d1e69 = document[_0x2eee5(0x174)]('fireworkContainer')
      , _0x4f5a25 = document[_0x2eee5(0x174)](_0x2eee5(0xf3));
    S[_0x2eee5(0xf2)] = ![];
    typeof hideStars === 'function' && hideStars();
    _0x17f32d && (_0x17f32d[_0x2eee5(0xed)][_0x2eee5(0x142)] = _0x2eee5(0xe5),
    _0x17f32d[_0x2eee5(0xff)]['remove']('show'));
    _0x407be6 && (_0x407be6[_0x2eee5(0xed)][_0x2eee5(0x142)] = _0x2eee5(0xe5),
    _0x407be6[_0x2eee5(0xff)][_0x2eee5(0x13b)](_0x2eee5(0x14b)));
    _0x553c54 && _0x553c54['classList'][_0x2eee5(0x13b)](_0x2eee5(0x14b));
    _0x4c2dae && (_0x4c2dae[_0x2eee5(0xed)][_0x2eee5(0x142)] = _0x2eee5(0xe5),
    _0x4c2dae[_0x2eee5(0xed)][_0x2eee5(0x11d)] = '');
    _0x5d1e69 && (_0x5d1e69[_0x2eee5(0xed)][_0x2eee5(0x142)] = _0x2eee5(0xe5),
    _0x5d1e69[_0x2eee5(0xed)]['opacity'] = '0',
    _0x5d1e69[_0x2eee5(0x100)] = '');
    const _0x2080a7 = document['querySelectorAll'](_0x2eee5(0xd4));
    _0x2080a7[_0x2eee5(0x108)](_0x85b2db => _0x85b2db[_0x2eee5(0x13b)]());
    _0xd788ce && (_0xd788ce[_0x2eee5(0xed)][_0x2eee5(0x142)] = _0x2eee5(0x9d));
    _0x1da75b && (_0x1da75b[_0x2eee5(0xed)][_0x2eee5(0x142)] = 'block');
    typeof currentPage !== _0x2eee5(0xbf) && (currentPage = 0x0);
    typeof isBookFinished !== 'undefined' && (isBookFinished = ![]);
    typeof isFlipping !== _0x2eee5(0xbf) && (isFlipping = ![]);
    const _0x4ab807 = document[_0x2eee5(0xfe)](_0x2eee5(0xeb));
    _0x4ab807[_0x2eee5(0x108)](_0x5ad030 => {
        const _0x54a6b1 = _0x2eee5;
        _0x5ad030['classList'][_0x54a6b1(0x13b)](_0x54a6b1(0x104), _0x54a6b1(0x11b));
    }
    );
    _0x4f5a25 && window[_0x2eee5(0xf8)] && (_0x4f5a25[_0x2eee5(0xcf)] = window[_0x2eee5(0xf8)][_0x2eee5(0xd7)],
    typeof isPlaying !== 'undefined' && isPlaying && _0x4f5a25[_0x2eee5(0x156)]()['catch'](_0x5b8125 => {}
    ));
    if (window[_0x2eee5(0xf8)] && typeof matrixChars !== _0x2eee5(0xbf)) {
        // matrixChars = window[_0x2eee5(0xf8)]['matrixText'][_0x2eee5(0x12b)]('');
        if (typeof matrixInterval !== _0x2eee5(0xbf) && matrixInterval) {
            clearInterval(matrixInterval),
            matrixInterval = null;
            if (_0x1da75b) {
                const _0x3fe953 = _0x1da75b[_0x2eee5(0xf5)]('2d');
                _0x3fe953[_0x2eee5(0xe3)](0x0, 0x0, _0x1da75b[_0x2eee5(0x155)], _0x1da75b[_0x2eee5(0x120)]);
            }
        }
        typeof initMatrixRain === _0x2eee5(0x149) && initMatrixRain();
    }
    _0x4c2dae && window[_0x2eee5(0xf8)] && (window[_0x2eee5(0xf8)][_0x2eee5(0xbc)] && window['settings']['gift'] !== '' ? _0x4c2dae[_0x2eee5(0xcf)] = window['settings'][_0x2eee5(0xbc)] : _0x4c2dae[_0x2eee5(0xcf)] = '');
    window[_0x2eee5(0xf8)] && window[_0x2eee5(0xf8)][_0x2eee5(0x10d)] && (pages = window[_0x2eee5(0xf8)][_0x2eee5(0x10d)],
    createPages());
    if (typeof S !== _0x2eee5(0xbf) && S['UI'] && window[_0x2eee5(0xf8)]) {
        S['UI'][_0x2eee5(0x169)](!![]);
        const _0x1994f2 = _0x2eee5(0x139) + window[_0x2eee5(0xf8)]['countdown'] + '|' + window[_0x2eee5(0xf8)][_0x2eee5(0x10f)] + _0x2eee5(0xd2);
        S['UI']['simulate'](_0x1994f2);
    }
}
function initializeDefaultSettings() {
    const _0x47ac72 = a0_0x19d3d4;
    window[_0x47ac72(0xf8)] = {
        'music': './music/happy-birthday.mp3',
        'countdown': 0x3,
        'matrixText': _0x47ac72(0x117),
        'matrixColor1': '#ffb6c1',
        'matrixColor2': _0x47ac72(0x13a),
        'sequence': _0x47ac72(0x16b),
        'sequenceColor': _0x47ac72(0x143),
        'gift': _0x47ac72(0xe7),
        'enableBook': ![],
        'enableHeart': ![],
        'pages': []
    },
    pages = window[_0x47ac72(0xf8)]['pages'];
}
function a0_0x3993(_0x309f05, _0x306259) {
    const _0x441eac = a0_0x441e();
    return a0_0x3993 = function(_0x39937d, _0x5e9b54) {
        _0x39937d = _0x39937d - 0x8d;
        let _0x5dd202 = _0x441eac[_0x39937d];
        return _0x5dd202;
    }
    ,
    a0_0x3993(_0x309f05, _0x306259);
}
function applyLoadedSettings() {
    const _0x2ac548 = a0_0x19d3d4
      , _0x2c676d = window[_0x2ac548(0xf8)]
      , _0x2c150b = document[_0x2ac548(0x174)](_0x2ac548(0xf3));
    _0x2c150b && (_0x2c150b[_0x2ac548(0xcf)] = _0x2c676d[_0x2ac548(0xd7)]);
    const _0xee5210 = document[_0x2ac548(0x174)]('gift-image');
    _0xee5210 && _0x2c676d['gift'] && (_0xee5210[_0x2ac548(0xcf)] = _0x2c676d['gift']);
    // matrixChars = _0x2c676d[_0x2ac548(0xb9)][_0x2ac548(0x12b)]('');
    if (matrixInterval) {
        clearInterval(matrixInterval),
        matrixInterval = null;
        const _0x42a432 = document[_0x2ac548(0x174)](_0x2ac548(0x14e));
        if (_0x42a432) {
            const _0x1a9892 = _0x42a432[_0x2ac548(0xf5)]('2d');
            _0x1a9892['clearRect'](0x0, 0x0, _0x42a432[_0x2ac548(0x155)], _0x42a432[_0x2ac548(0x120)]);
        }
    }
    initMatrixRain(),
    createPages(),
    S['UI'][_0x2ac548(0x169)](!![]);
    const _0x1738ad = _0x2ac548(0x139) + _0x2c676d[_0x2ac548(0xab)] + '||' + _0x2c676d['sequence'] + _0x2ac548(0xd2);
    S['UI'][_0x2ac548(0x14d)](_0x1738ad);
}
settingsButton[a0_0x19d3d4(0x129)](a0_0x19d3d4(0x91), () => {
    const _0x3a3bbf = a0_0x19d3d4;
    settingsModal[_0x3a3bbf(0xed)][_0x3a3bbf(0x142)] = _0x3a3bbf(0x9d),
    populateModal();
}
),
closeModal[a0_0x19d3d4(0x129)](a0_0x19d3d4(0x91), () => {
    const _0x36c428 = a0_0x19d3d4;
    settingsModal[_0x36c428(0xed)]['display'] = _0x36c428(0xe5);
}
);
function populateModal() {
    const _0xf26ede = a0_0x19d3d4
      , _0x5288b1 = document['getElementById']('backgroundMusic');
    _0x5288b1[_0xf26ede(0x100)] = musicOptions[_0xf26ede(0x16a)](_0x5a3ae8 => _0xf26ede(0x9f) + _0x5a3ae8['value'] + '\x22>' + _0x5a3ae8[_0xf26ede(0xfb)] + _0xf26ede(0x140))['join'](''),
    _0x5288b1[_0xf26ede(0x11f)] = settings[_0xf26ede(0xd7)];
    const _0x3d99ab = document[_0xf26ede(0x174)](_0xf26ede(0xdf));
    _0x3d99ab[_0xf26ede(0x11f)] = settings[_0xf26ede(0xab)];
    const _0x402848 = document['getElementById'](_0xf26ede(0x103));
    _0x402848[_0xf26ede(0x11f)] = settings[_0xf26ede(0x103)][_0xf26ede(0x141)]();
    const _0x16b3d6 = document[_0xf26ede(0x174)](_0xf26ede(0x151));
    _0x16b3d6[_0xf26ede(0x11f)] = settings[_0xf26ede(0x151)][_0xf26ede(0x141)]();
    const _0x4dbca3 = document[_0xf26ede(0x174)](_0xf26ede(0x93));
    _0x4dbca3[_0xf26ede(0x100)] = gifOptions['map'](_0x40cbb0 => _0xf26ede(0x9f) + _0x40cbb0[_0xf26ede(0x11f)] + '\x22>' + _0x40cbb0[_0xf26ede(0xfb)] + _0xf26ede(0x140))[_0xf26ede(0x124)](''),
    _0x4dbca3['value'] = settings[_0xf26ede(0xbc)];
    const _0x63ec17 = document[_0xf26ede(0x174)](_0xf26ede(0xb9));
    _0x63ec17[_0xf26ede(0x11f)] = settings[_0xf26ede(0xb9)];
    const _0x465d70 = document[_0xf26ede(0x174)](_0xf26ede(0xa9));
    _0x465d70['value'] = settings['matrixColor1'];
    const _0x31bd90 = document[_0xf26ede(0x174)](_0xf26ede(0xe9));
    _0x31bd90[_0xf26ede(0x11f)] = settings[_0xf26ede(0xe9)];
    const _0x148116 = document['getElementById']('sequenceText');
    _0x148116['value'] = settings[_0xf26ede(0x10f)];
    const _0x1cfb8d = document['getElementById'](_0xf26ede(0xcd));
    _0x1cfb8d[_0xf26ede(0x11f)] = settings[_0xf26ede(0xcd)];
    const _0xfe4386 = document[_0xf26ede(0x174)]('pageConfigs');
    _0xfe4386[_0xf26ede(0x100)] = '',
    _0x402848[_0xf26ede(0x129)](_0xf26ede(0x90), function() {
        const _0x436a2d = _0xf26ede
          , _0x51826e = document['getElementById'](_0x436a2d(0x133))
          , _0x3408fb = document[_0x436a2d(0x174)](_0x436a2d(0x151));
        this[_0x436a2d(0x11f)] === _0x436a2d(0x126) ? (_0x51826e[_0x436a2d(0xed)]['display'] = _0x436a2d(0x9d),
        _0x3408fb['disabled'] = ![]) : (_0x51826e['style']['display'] = _0x436a2d(0xe5),
        _0x3408fb['value'] = _0x436a2d(0xad),
        _0x3408fb[_0x436a2d(0xef)] = !![]),
        updatePricingFromModal();
    });
    const _0x1d075f = document[_0xf26ede(0xfa)]('div');
    _0x1d075f[_0xf26ede(0xed)]['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#e3f2fd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20#2196f3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
    let _0x155de7 = '';
    if (settings[_0xf26ede(0x10d)][_0xf26ede(0x12e)] === 0x1)
        _0x155de7 = t('validCoverOnly');
    else
        settings['pages']['length'] >= 0x2 && (settings[_0xf26ede(0x10d)][_0xf26ede(0x12e)] % 0x2 === 0x1 ? _0x155de7 = t(_0xf26ede(0x118)) : _0x155de7 = t(_0xf26ede(0x148)));
    _0x1d075f['innerHTML'] = _0xf26ede(0x109) + t(_0xf26ede(0x146)) + _0xf26ede(0x10b) + t('totalPages') + ':\x20' + settings['pages'][_0xf26ede(0x12e)] + _0xf26ede(0xdb) + t(_0xf26ede(0xe1)) + ':\x20' + _0x155de7 + '<br>\x0a\x20\x20\x20\x20•\x20' + t(_0xf26ede(0x10e)) + ':\x20' + (settings[_0xf26ede(0x10d)][_0xf26ede(0x12e)] === 0x1 ? t('coverOnly') : t(_0xf26ede(0x131), {
        'pairs': Math[_0xf26ede(0x11e)]((settings[_0xf26ede(0x10d)]['length'] - 0x1) / 0x2),
        'extra': settings[_0xf26ede(0x10d)][_0xf26ede(0x12e)] % 0x2 === 0x0 ? t('plusOneExtra') : ''
    })) + '\x0a',
    _0xfe4386[_0xf26ede(0x94)](_0x1d075f),
    settings[_0xf26ede(0x10d)][_0xf26ede(0x108)]( (_0x4ce8b5, _0x4c5c3c) => {
        const _0x15fb0b = _0xf26ede
          , _0x1623bd = document[_0x15fb0b(0xfa)](_0x15fb0b(0xa4));
        _0x1623bd[_0x15fb0b(0xd3)] = 'page-config';
        const _0x3ee049 = document[_0x15fb0b(0xfa)]('h3');
        _0x4c5c3c === 0x0 ? _0x3ee049[_0x15fb0b(0x111)] = t(_0x15fb0b(0x113), {
            'num': _0x4c5c3c + 0x1
        }) : _0x3ee049[_0x15fb0b(0x111)] = t(_0x15fb0b(0x158), {
            'num': _0x4c5c3c + 0x1
        });
        _0x1623bd[_0x15fb0b(0x94)](_0x3ee049);
        if (settings[_0x15fb0b(0x10d)]['length'] > 0x1) {
            const _0x4c7c21 = document[_0x15fb0b(0xfa)]('p');
            _0x4c7c21['className'] = _0x15fb0b(0xc5),
            _0x4c7c21[_0x15fb0b(0x111)] = '×',
            _0x4c7c21[_0x15fb0b(0xb6)] = () => removePage(_0x4c5c3c),
            _0x1623bd['appendChild'](_0x4c7c21);
        }
        const _0x44cbc0 = document['createElement'](_0x15fb0b(0xfb));
        _0x44cbc0[_0x15fb0b(0xb1)]('for', _0x15fb0b(0xea) + _0x4c5c3c),
        _0x44cbc0[_0x15fb0b(0x111)] = t('imageLabel'),
        _0x1623bd[_0x15fb0b(0x94)](_0x44cbc0);
        const _0x6a49e5 = document['createElement'](_0x15fb0b(0x13e));
        _0x6a49e5[_0x15fb0b(0xcc)] = _0x15fb0b(0x15a),
        _0x6a49e5['id'] = 'pageImage' + _0x4c5c3c,
        _0x6a49e5[_0x15fb0b(0x16c)] = _0x15fb0b(0xa6),
        _0x1623bd['appendChild'](_0x6a49e5);
        const _0x2ab537 = document[_0x15fb0b(0xfa)](_0x15fb0b(0x10a));
        _0x2ab537['id'] = 'imagePreview' + _0x4c5c3c,
        _0x2ab537['style']['cssText'] = _0x15fb0b(0x137);
        if (_0x4ce8b5[_0x15fb0b(0x168)])
            _0x2ab537[_0x15fb0b(0xcf)] = _0x4ce8b5[_0x15fb0b(0x168)],
            _0x2ab537[_0x15fb0b(0xc4)] = _0x15fb0b(0x14c) + (_0x4c5c3c + 0x1);
        else {
            const _0x41c1b0 = _0x4c5c3c === 0x0 ? t('coverPlaceholder') : t(_0x15fb0b(0x9c), {
                'num': _0x4c5c3c + 0x1
            });
            _0x2ab537[_0x15fb0b(0xed)][_0x15fb0b(0xb0)] += _0x15fb0b(0xc9),
            _0x2ab537['src'] = _0x15fb0b(0x144),
            _0x2ab537[_0x15fb0b(0xc4)] = t(_0x15fb0b(0xfc), {
                'placeholder': _0x41c1b0
            });
        }
        _0x1623bd[_0x15fb0b(0x94)](_0x2ab537);
        if (_0x4ce8b5[_0x15fb0b(0x102)]) {
            const _0x2894d6 = new DataTransfer();
            _0x2894d6[_0x15fb0b(0xca)][_0x15fb0b(0xa2)](_0x4ce8b5['selectedFile']),
            _0x6a49e5[_0x15fb0b(0xb3)] = _0x2894d6[_0x15fb0b(0xb3)];
            const _0x54ea05 = new FileReader();
            _0x54ea05[_0x15fb0b(0x8f)] = function(_0x35925f) {
                const _0x36f7cf = _0x15fb0b;
                _0x2ab537[_0x36f7cf(0xcf)] = _0x35925f[_0x36f7cf(0x95)][_0x36f7cf(0x15f)],
                _0x2ab537[_0x36f7cf(0xc4)] = 'Ảnh\x20mới\x20cho\x20trang\x20' + (_0x4c5c3c + 0x1);
            }
            ,
            _0x54ea05[_0x15fb0b(0xcb)](_0x4ce8b5['selectedFile']);
        }
        _0x6a49e5['addEventListener'](_0x15fb0b(0x90), function(_0x526e0d) {
            const _0x28189d = _0x15fb0b
              , _0x951653 = _0x526e0d[_0x28189d(0x95)][_0x28189d(0xb3)][0x0];
            if (_0x951653) {
                const _0x3d0917 = new FileReader();
                _0x3d0917[_0x28189d(0x8f)] = function(_0x471a32) {
                    const _0xe3c865 = _0x28189d;
                    _0x2ab537[_0xe3c865(0xcf)] = _0x471a32['target'][_0xe3c865(0x15f)],
                    _0x2ab537['style'][_0xe3c865(0xb0)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    _0x2ab537['alt'] = _0xe3c865(0xaa) + (_0x4c5c3c + 0x1);
                }
                ,
                _0x3d0917[_0x28189d(0xcb)](_0x951653);
            } else {
                if (_0x4ce8b5[_0x28189d(0x168)] && !_0x4ce8b5['selectedFile'])
                    _0x2ab537[_0x28189d(0xcf)] = _0x4ce8b5[_0x28189d(0x168)],
                    _0x2ab537[_0x28189d(0xc4)] = _0x28189d(0x12a) + (_0x4c5c3c + 0x1);
                else {
                    const _0x3397d6 = _0x4c5c3c === 0x0 ? t('coverPlaceholder') : t(_0x28189d(0x9c), {
                        'num': _0x4c5c3c + 0x1
                    });
                    _0x2ab537[_0x28189d(0xed)]['cssText'] += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f0f0f0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    _0x2ab537[_0x28189d(0xcf)] = _0x28189d(0x144),
                    _0x2ab537['alt'] = t('noImageAlt', {
                        'placeholder': _0x3397d6
                    });
                }
            }
        });
        if (_0x4c5c3c >= 0x2 && _0x4c5c3c % 0x2 === 0x0) {
            const _0x5be375 = document['createElement'](_0x15fb0b(0xfb));
            _0x5be375[_0x15fb0b(0xb1)](_0x15fb0b(0xe0), _0x15fb0b(0xbe) + _0x4c5c3c),
            _0x5be375[_0x15fb0b(0x111)] = t(_0x15fb0b(0x167)),
            _0x1623bd['appendChild'](_0x5be375);
            const _0x12cb1f = document['createElement']('textarea');
            _0x12cb1f['id'] = _0x15fb0b(0xbe) + _0x4c5c3c,
            _0x12cb1f[_0x15fb0b(0xe2)] = t('contentPlaceholder', {
                'num': _0x4c5c3c + 0x1
            }),
            _0x12cb1f['rows'] = 0x4,
            _0x12cb1f[_0x15fb0b(0x11f)] = _0x4ce8b5[_0x15fb0b(0x12d)] || '',
            _0x1623bd[_0x15fb0b(0x94)](_0x12cb1f);
        }
        _0xfe4386[_0x15fb0b(0x94)](_0x1623bd);
    }
    );
    if (settings[_0xf26ede(0x10d)][_0xf26ede(0x12e)] < 0x14) {
        const _0x312b21 = document[_0xf26ede(0xfa)]('button');
        _0x312b21[_0xf26ede(0x111)] = t('addNewPage'),
        _0x312b21['onclick'] = addNewPage,
        _0x312b21['style'][_0xf26ede(0xb0)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#4caf50,\x20#45a049);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        _0xfe4386['appendChild'](_0x312b21);
    }
    _0x465d70['addEventListener'](_0xf26ede(0x13e), () => {
        const _0x2a9b6d = _0xf26ede
          , _0x3d67e1 = document[_0x2a9b6d(0x174)]('matrixColor1Preview');
        _0x3d67e1 && (_0x3d67e1[_0x2a9b6d(0xed)][_0x2a9b6d(0x154)] = _0x465d70[_0x2a9b6d(0x11f)]);
    }
    ),
    _0x31bd90[_0xf26ede(0x129)](_0xf26ede(0x13e), () => {
        const _0x1aebfd = _0xf26ede
          , _0xb0ba8e = document[_0x1aebfd(0x174)](_0x1aebfd(0x145));
        _0xb0ba8e && (_0xb0ba8e[_0x1aebfd(0xed)]['backgroundColor'] = _0x31bd90[_0x1aebfd(0x11f)]);
    }
    ),
    _0x1cfb8d[_0xf26ede(0x129)]('input', () => {
        const _0x1c1f01 = _0xf26ede
          , _0x45443b = document[_0x1c1f01(0x174)](_0x1c1f01(0xb8));
        _0x45443b && (_0x45443b['style'][_0x1c1f01(0x154)] = _0x1cfb8d['value']);
    }
    );
    const _0x1c1365 = document[_0xf26ede(0x174)](_0xf26ede(0x133));
    settings[_0xf26ede(0x103)] ? _0x1c1365[_0xf26ede(0xed)][_0xf26ede(0x142)] = 'block' : _0x1c1365[_0xf26ede(0xed)][_0xf26ede(0x142)] = _0xf26ede(0xe5);
    window[_0xf26ede(0xb4)] && window['pricingCalculator'][_0xf26ede(0xf1)](settings);
    const _0x1ad0ba = [_0xf26ede(0xec), _0xf26ede(0x103), _0xf26ede(0x151)];
    _0x1ad0ba['forEach'](_0x4c456f => {
        const _0xb06600 = _0xf26ede
          , _0xba0f2f = document[_0xb06600(0x174)](_0x4c456f);
        _0xba0f2f && _0xba0f2f['addEventListener'](_0xb06600(0x90), function() {
            updatePricingFromModal();
        });
    }
    ),
    updatePricingFromModal();
    const _0x2d85e6 = document[_0xf26ede(0xfe)](_0xf26ede(0x14f));
    _0x2d85e6[_0xf26ede(0x108)](_0xc55e67 => {
        const _0xf77305 = _0xf26ede;
        _0xc55e67[_0xf77305(0x129)](_0xf77305(0x130), function(_0x167dd1) {
            const _0x1f1ac9 = _0xf77305;
            if (_0x167dd1[_0x1f1ac9(0x98)] === '\x20' || _0x167dd1[_0x1f1ac9(0x164)] === _0x1f1ac9(0xb5))
                return _0x167dd1[_0x1f1ac9(0x13d)](),
                !![];
        }),
        _0xc55e67['addEventListener']('input', function(_0x109891) {
            _0x109891['stopPropagation']();
        });
    }
    );
}
function addNewPage() {
    const _0x3fe706 = a0_0x19d3d4;
    settings[_0x3fe706(0x10d)]['length'] < 0x14 && (saveFormDataToSettings(),
    settings[_0x3fe706(0x10d)]['push']({
        'image': '',
        'content': ''
    }),
    populateModal(),
    updatePricingFromModal());
}
function removePage(_0x723a24) {
    const _0x5b85db = a0_0x19d3d4;
    settings[_0x5b85db(0x10d)][_0x5b85db(0x12e)] > 0x1 && (saveFormDataToSettings(),
    settings[_0x5b85db(0x10d)][_0x5b85db(0x157)](_0x723a24, 0x1),
    populateModal(),
    updatePricingFromModal());
}
function saveFormDataToSettings() {
    const _0x4d466a = a0_0x19d3d4;
    try {
        const _0x2dbc1a = document[_0x4d466a(0x174)](_0x4d466a(0xec));
        if (_0x2dbc1a)
            settings[_0x4d466a(0xd7)] = _0x2dbc1a[_0x4d466a(0x11f)];
        const _0x3b41a7 = document['getElementById'](_0x4d466a(0xdf));
        if (_0x3b41a7)
            settings['countdown'] = parseInt(_0x3b41a7['value']) || 0x3;
        const _0x5aa7b3 = document[_0x4d466a(0x174)](_0x4d466a(0x103));
        if (_0x5aa7b3)
            settings[_0x4d466a(0x103)] = _0x5aa7b3[_0x4d466a(0x11f)] === _0x4d466a(0x126);
        const _0x545415 = document[_0x4d466a(0x174)](_0x4d466a(0x151));
        if (_0x545415)
            settings[_0x4d466a(0x151)] = _0x545415[_0x4d466a(0x11f)] === _0x4d466a(0x126);
        const _0x5071d5 = document[_0x4d466a(0x174)]('giftImage');
        if (_0x5071d5)
            settings[_0x4d466a(0xbc)] = _0x5071d5[_0x4d466a(0x11f)];
        const _0x4d16e7 = document['getElementById'](_0x4d466a(0xb9));
        if (_0x4d16e7)
            settings['matrixText'] = _0x4d16e7['value'];
        const _0x27a8d4 = document[_0x4d466a(0x174)](_0x4d466a(0xa9));
        if (_0x27a8d4)
            settings['matrixColor1'] = _0x27a8d4[_0x4d466a(0x11f)];
        const _0x5ec77d = document[_0x4d466a(0x174)]('matrixColor2');
        if (_0x5ec77d)
            settings[_0x4d466a(0xe9)] = _0x5ec77d['value'];
        const _0x17857b = document[_0x4d466a(0x174)](_0x4d466a(0xf6));
        if (_0x17857b)
            settings[_0x4d466a(0x10f)] = _0x17857b[_0x4d466a(0x11f)];
        const _0xb6958e = document[_0x4d466a(0x174)](_0x4d466a(0xcd));
        if (_0xb6958e)
            settings[_0x4d466a(0xcd)] = _0xb6958e[_0x4d466a(0x11f)];
        settings['pages']['forEach']( (_0x31d204, _0x47af48) => {
            const _0x26accd = _0x4d466a
              , _0x12eac9 = document[_0x26accd(0x174)](_0x26accd(0xea) + _0x47af48)
              , _0xbe1cc4 = document[_0x26accd(0x174)](_0x26accd(0xbe) + _0x47af48);
            if (_0x12eac9 && _0x12eac9[_0x26accd(0xb3)][_0x26accd(0x12e)] > 0x0) {
                const _0x17b798 = URL[_0x26accd(0x15c)](_0x12eac9[_0x26accd(0xb3)][0x0]);
                settings[_0x26accd(0x10d)][_0x47af48]['image'] = _0x17b798,
                settings[_0x26accd(0x10d)][_0x47af48][_0x26accd(0x102)] = _0x12eac9[_0x26accd(0xb3)][0x0];
            }
            _0xbe1cc4 && (settings[_0x26accd(0x10d)][_0x47af48][_0x26accd(0x12d)] = _0xbe1cc4[_0x26accd(0x11f)]);
        }
        );
    } catch (_0x20337b) {}
}
function updatePricingFromModal() {
    const _0xb6e23f = a0_0x19d3d4;
    if (window['pricingCalculator']) {
        const _0x532cad = {
            'music': document[_0xb6e23f(0x174)](_0xb6e23f(0xec))?.[_0xb6e23f(0x11f)] || './music/happybirtday_uia.mp3',
            'enableBook': document[_0xb6e23f(0x174)]('enableBook')?.['value'] === 'true',
            'enableHeart': document[_0xb6e23f(0x174)]('enableHeart')?.[_0xb6e23f(0x11f)] === _0xb6e23f(0x126),
            'pages': settings[_0xb6e23f(0x10d)] || []
        };
        window[_0xb6e23f(0xb4)][_0xb6e23f(0xf1)](_0x532cad);
    }
}
function createPages() {
    const _0x308fd5 = a0_0x19d3d4;
    book[_0x308fd5(0x100)] = '';
    const _0x4d6bc7 = pages[_0x308fd5(0x12e)]
      , _0x52d277 = Math['ceil'](_0x4d6bc7 / 0x2);
    for (let _0x2a72df = 0x0; _0x2a72df < _0x52d277; _0x2a72df++) {
        const _0x1b8e2f = document[_0x308fd5(0xfa)]('div');
        _0x1b8e2f[_0x308fd5(0xff)][_0x308fd5(0xa2)](_0x308fd5(0x170)),
        _0x1b8e2f[_0x308fd5(0xbb)]['page'] = _0x2a72df;
        const _0x226238 = _0x2a72df * 0x2
          , _0x5d9b7d = _0x226238 + 0x1
          , _0x4b0d2f = document[_0x308fd5(0xfa)]('div');
        _0x4b0d2f[_0x308fd5(0xff)][_0x308fd5(0xa2)](_0x308fd5(0x11c));
        if (_0x226238 < pages[_0x308fd5(0x12e)] && pages[_0x226238]) {
            const _0x23c026 = pages[_0x226238];
            if (_0x23c026[_0x308fd5(0x168)]) {
                const _0x3d501a = document[_0x308fd5(0xfa)](_0x308fd5(0x10a));
                _0x3d501a[_0x308fd5(0xcf)] = _0x23c026['image'],
                _0x3d501a[_0x308fd5(0x132)] = function() {
                    const _0x294da2 = _0x308fd5
                      , _0x16be86 = _0x226238 === 0x0 ? _0x294da2(0x173) : 'Trang\x20' + (_0x226238 + 0x1);
                    this['src'] = createPlaceholderImage(_0x16be86);
                }
                ,
                _0x4b0d2f['appendChild'](_0x3d501a);
            } else
                _0x4b0d2f['classList'][_0x308fd5(0xa2)](_0x308fd5(0xda)),
                _0x4b0d2f[_0x308fd5(0x111)] = t(_0x308fd5(0x97));
        } else
            _0x4b0d2f[_0x308fd5(0xff)][_0x308fd5(0xa2)](_0x308fd5(0xda)),
            _0x4b0d2f['textContent'] = t(_0x308fd5(0x97));
        const _0x507311 = document[_0x308fd5(0xfa)](_0x308fd5(0xa4));
        _0x507311[_0x308fd5(0xff)][_0x308fd5(0xa2)](_0x308fd5(0xa1));
        if (_0x5d9b7d < pages[_0x308fd5(0x12e)] && pages[_0x5d9b7d]) {
            const _0x19e27c = pages[_0x5d9b7d];
            if (_0x19e27c[_0x308fd5(0x168)]) {
                const _0x19905b = document[_0x308fd5(0xfa)](_0x308fd5(0x10a));
                _0x19905b[_0x308fd5(0xcf)] = _0x19e27c['image'],
                _0x19905b['onerror'] = function() {
                    const _0x5126d5 = _0x308fd5
                      , _0x39a0b9 = _0x5126d5(0x9e) + (_0x5d9b7d + 0x1);
                    this[_0x5126d5(0xcf)] = createPlaceholderImage(_0x39a0b9);
                }
                ,
                _0x507311[_0x308fd5(0x94)](_0x19905b);
            } else
                _0x507311['classList'][_0x308fd5(0xa2)](_0x308fd5(0xda)),
                _0x507311[_0x308fd5(0x111)] = t(_0x308fd5(0x97));
        } else {
            const _0x1a3ea1 = document[_0x308fd5(0xfa)]('img');
            _0x1a3ea1[_0x308fd5(0xcf)] = _0x308fd5(0xbd),
            _0x1a3ea1['onerror'] = function() {
                const _0x5ece86 = _0x308fd5;
                _0x507311[_0x5ece86(0xff)][_0x5ece86(0xa2)](_0x5ece86(0xda)),
                _0x507311[_0x5ece86(0x111)] = t('endOfBook');
            }
            ,
            _0x507311[_0x308fd5(0x94)](_0x1a3ea1);
        }
        _0x1b8e2f[_0x308fd5(0x94)](_0x4b0d2f),
        _0x1b8e2f['appendChild'](_0x507311),
        book[_0x308fd5(0x94)](_0x1b8e2f),
        _0x1b8e2f[_0x308fd5(0x129)](_0x308fd5(0x91), _0x2f4b18 => {
            const _0x4e178c = _0x308fd5;
            if (!isFlipping) {
                const _0x5c793c = _0x1b8e2f[_0x4e178c(0x110)]()
                  , _0x125196 = _0x2f4b18[_0x4e178c(0x16f)] - _0x5c793c[_0x4e178c(0xc8)]
                  , _0x36479a = _0x5c793c[_0x4e178c(0x155)];
                if (_0x125196 < _0x36479a / 0x2 && _0x1b8e2f[_0x4e178c(0xff)]['contains'](_0x4e178c(0x104)))
                    prevPage();
                else
                    _0x125196 >= _0x36479a / 0x2 && !_0x1b8e2f[_0x4e178c(0xff)][_0x4e178c(0x9b)]('flipped') && nextPage();
            }
        }
        );
    }
    photoUrls = pages[_0x308fd5(0x114)](_0x2ead39 => _0x2ead39[_0x308fd5(0x168)])[_0x308fd5(0x16a)](_0x48755e => _0x48755e[_0x308fd5(0x168)]);
}
function a0_0x441e() {
    const _0xcefc9b = ['./music/happybirtday_uia.mp3', 'sequenceColorPreview', 'matrixText', 'data', 'dataset', 'gift', './image/theend.jpg', 'pageContent', 'undefined', 'Đừng\x20làm\x20trái\x20tim\x20anh\x20đau', '</p>\x0a\x20\x20\x20\x20</div>\x0a', 'initializePricingCalculator', 'gift-image', 'alt', 'page-config-close', './music/happybirthday.mp3', 'fullscreenNotSupported', 'left', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f0f0f0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'items', 'readAsDataURL', 'type', 'sequenceColor', './music/dunglamtraitimanhdau.mp3', 'src', 'getWebsiteIdFromURL', 'loadingOverlay', '|#gift|', 'className', '.photo', 'contentDisplay', '426JLdAsF', 'music', '231774wTTepK', 'Happy\x20Birthday\x20(Miễn\x20phí)', 'empty-page', '<br>\x0a\x20\x20\x20\x20•\x20', 'innerHeight', '10247534XyYuKl', 'PAID', 'countdownTime', 'for', 'status', 'placeholder', 'clearRect', 'resize', 'none', 'Không\x20thể\x20tải\x20dữ\x20liệu\x20từ\x20server', '../gif/Cat\x20Love\x20GIF\x20by\x20KIKI.gif', '.close', 'matrixColor2', 'pageImage', '.page', 'backgroundMusic', 'style', 'exitFullscreen', 'disabled', '1667638uaecWp', 'updateFromSettings', 'initialized', 'birthdayAudio', '528148TTdrSn', 'getContext', 'sequenceText', 'Happy\x20Birthday\x20(Mèo\x20UIA)', 'settings', '36bpyccD', 'createElement', 'label', 'noImageAlt', 'fullscreenBtn', 'querySelectorAll', 'classList', 'innerHTML', 'pleaseAddOrRemovePage', 'selectedFile', 'enableBook', 'flipped', 'Happy\x20Birthday\x20Podcast\x20giọng\x20nữ', '.canvas', 'fullscreenElement', 'forEach', '\x0a\x20\x20\x20\x20<strong>📖\x20', 'img', '</strong><br>\x0a\x20\x20\x20\x20•\x20', 'Gif1', 'pages', 'structure', 'sequence', 'getBoundingClientRect', 'textContent', 'Happy\x20Birthday\x20Podcast\x20giọng\x20nam', 'pageTitleCover', 'filter', 'Gif4', '517130RTRrGj', 'HAPPYBIRTHDAY', 'validCoverAndPairs', './music/postcardnam.mp3', './gif/Happy-Birthday-GIF-by-BREAD-TR-unscreen.gif', 'flipping', 'page-front', 'animation', 'floor', 'value', 'height', 'loading', './music/anhnangcuaanh.mp3', 'Đến\x20bên\x20anh', 'join', './music/denbenanh.mp3', 'true', '.book-container', 'querySelector', 'addEventListener', 'Ảnh\x20hiện\x20tại\x20trang\x20', 'split', 'None', 'content', 'length', './gif/happy.gif', 'keydown', 'coverAndPairs', 'onerror', 'bookSettingsSection', 'requestFullscreen', 'isWebsiteReady', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'settingsButton', '|#countdown\x20', '#ffc0cb', 'remove', 'removeEventListener', 'stopPropagation', 'input', '53418nBndhH', '</option>', 'toString', 'display', '#d39b9b', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2jGsGEgY8OzIOS6o25oPC90ZXh0Pjwvc3ZnPg==', 'matrixColor2Preview', 'bookPageInfo', '#ffb6c1', 'invalidMissingPage', 'function', './music/phepmau.mp3', 'show', 'Ảnh\x20trang\x20', 'simulate', 'matrix-rain', '.modal-content\x20input[type=\x22text\x22],\x20.modal-content\x20textarea', 'Ánh\x20nắng\x20của\x20anh', 'enableHeart', 'HAPPY|BIRTHDAY|MY|CUTEE|LITTLE|SWARALI|❤', './gif/happy3.gif', 'backgroundColor', 'width', 'play', 'splice', 'pageTitle', 'waitingIsHappiness', 'file', 'success', 'createObjectURL', 'Suy\x20nghĩ\x20trong\x20anh', 'langSwitchBtn', 'result', '8vJxPyA', 'fullscreenchange', 'push', '2631VResBS', 'code', '.copyright', 'hideTimeout', 'contentLabel', 'image', 'reset', 'map', 'FELIZ|DIA|Y|3 MESES|JUNTOS|MI|AMORCITO|TE QUIERO MUCHO|❤', 'accept', 'error', 'zIndex', 'clientX', 'page', 'body', './music/happybirthday_domixi.mp3', 'Bìa\x20Sách', 'getElementById', 'head', '\x0a\x20\x20\x20\x20<div\x20class=\x22loading-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loading-spinner\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>', 'onload', 'change', 'click', '125vgwrrV', 'giftImage', 'appendChild', 'target', 'Gif3', 'emptyPage', 'key', './music/happy-birthday.mp3', 'birthdayAPI', 'contains', 'pagePlaceholder', 'block', 'Trang\x20', '<option\x20value=\x22', 'currentPages', 'page-back', 'add', 'applySettings', 'div', 'documentElement', 'image/*', 'innerWidth', 'Gif2', 'matrixColor1', 'Ảnh\x20mới\x20cho\x20trang\x20', 'countdown', 'Phép\x20màu', 'false', 'DOMContentLoaded', 'getBirthdayWebsiteByWebsiteId', 'cssText', 'setAttribute', 'book', 'files', 'pricingCalculator', 'Space', 'onclick'];
    a0_0x441e = function() {
        return _0xcefc9b;
    }
    ;
    return a0_0x441e();
}
document[a0_0x19d3d4(0x129)](a0_0x19d3d4(0xae), function() {
    const _0x498bc4 = a0_0x19d3d4
      , _0x3d3110 = document[_0x498bc4(0x174)]('book')
      , _0x119365 = document[_0x498bc4(0x128)]('.book-container');
    _0x3d3110 && (_0x3d3110[_0x498bc4(0xed)][_0x498bc4(0x142)] = _0x498bc4(0xe5),
    _0x3d3110[_0x498bc4(0xff)][_0x498bc4(0x13b)](_0x498bc4(0x14b)));
    _0x119365 && (_0x119365[_0x498bc4(0xed)][_0x498bc4(0x142)] = _0x498bc4(0xe5),
    _0x119365[_0x498bc4(0xff)][_0x498bc4(0x13b)]('show'));
    createPages();
    const _0x9f6822 = window[_0x498bc4(0x9a)]?.[_0x498bc4(0xd0)]();
    if (_0x9f6822) {
        const _0x3c8435 = document[_0x498bc4(0x174)]('googleAuthContainer');
        if (_0x3c8435)
            _0x3c8435['style'][_0x498bc4(0x142)] = _0x498bc4(0xe5);
        loadWebsiteFromServer();
    } else
        initializeDefaultSettings(),
        applyLoadedSettings(),
        window[_0x498bc4(0xc2)] && window[_0x498bc4(0xc2)](),
        window[_0x498bc4(0xb4)] && window[_0x498bc4(0xb4)]['updatePricing'](),
        window[_0x498bc4(0x135)] = !![];
});
function createLoadingUI() {
    const _0x2f2625 = a0_0x19d3d4
      , _0x4e06af = document[_0x2f2625(0xfa)](_0x2f2625(0xa4));
    _0x4e06af['id'] = _0x2f2625(0xd1),
    _0x4e06af[_0x2f2625(0x100)] = _0x2f2625(0x8e) + t(_0x2f2625(0x121)) + _0x2f2625(0x136) + t(_0x2f2625(0x159)) + _0x2f2625(0xc1);
    const _0x488ba3 = document[_0x2f2625(0xfa)](_0x2f2625(0xed));
    return _0x488ba3[_0x2f2625(0x111)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20#loadingOverlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeIn\x200.3s\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.loading-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.loading-spinner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x204px\x20solid\x20rgba(51,\x2010,\x2058,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x204px\x20solid\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20.loading-content\x20h2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Pacifico\x27,\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.loading-content\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Pacifico\x27,\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeIn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeOut\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    document[_0x2f2625(0x8d)]['appendChild'](_0x488ba3),
    document[_0x2f2625(0x171)][_0x2f2625(0x94)](_0x4e06af),
    _0x4e06af;
}
function removeLoadingUI() {
    const _0x3ded75 = a0_0x19d3d4
      , _0x9990a4 = document[_0x3ded75(0x174)](_0x3ded75(0xd1));
    _0x9990a4 && (_0x9990a4[_0x3ded75(0xed)][_0x3ded75(0x11d)] = 'fadeOut\x200.3s\x20ease-in-out',
    setTimeout( () => {
        const _0x366022 = _0x3ded75;
        _0x9990a4[_0x366022(0x13b)]();
    }
    , 0x12c));
}
window['isWebsiteReady'] = ![];
async function loadWebsiteFromServer() {
    const _0x57c643 = a0_0x19d3d4
      , _0x11350b = window[_0x57c643(0x9a)][_0x57c643(0xd0)]();
    if (!_0x11350b) {
        initializeDefaultSettings(),
        applyLoadedSettings(),
        window[_0x57c643(0x135)] = !![];
        if (typeof startWebsite === _0x57c643(0x149))
            tryStartWebsiteWhenLandscape();
        ;return;
    }
    const _0x2057b2 = document['getElementById'](_0x57c643(0x138))
      , _0x39f3f9 = document[_0x57c643(0x174)]('pricingContainer');
    _0x2057b2 && (_0x2057b2['style'][_0x57c643(0x142)] = 'none');
    _0x39f3f9 && (_0x39f3f9['style'][_0x57c643(0x142)] = _0x57c643(0xe5));
    const _0x5ca678 = document[_0x57c643(0x174)](_0x57c643(0x15e));
    _0x5ca678 && (_0x5ca678[_0x57c643(0xed)][_0x57c643(0x142)] = _0x57c643(0xe5));
    const _0x1646e7 = createLoadingUI();
    try {
        const _0x31bb98 = await window['birthdayAPI'][_0x57c643(0xaf)](_0x11350b);
        if (_0x31bb98[_0x57c643(0x15b)] && _0x31bb98[_0x57c643(0xba)]) {
            const _0x256c9b = _0x31bb98[_0x57c643(0xba)]['settings']
              , _0x193204 = _0x31bb98[_0x57c643(0xba)][_0x57c643(0xe1)]
              , _0x549277 = document[_0x57c643(0x128)](_0x57c643(0x165));
            if (_0x193204 === _0x57c643(0xde) && _0x549277)
                _0x549277[_0x57c643(0xed)][_0x57c643(0x142)] = _0x57c643(0xe5);
            else {}
            window['settings'] = {
                'music': _0x256c9b[_0x57c643(0xd7)] || _0x57c643(0xb7),
                'countdown': _0x256c9b[_0x57c643(0xab)] || 0x3,
                'matrixText': _0x256c9b[_0x57c643(0xb9)] || _0x57c643(0x117),
                'matrixColor1': _0x256c9b['matrixColor1'] || _0x57c643(0x147),
                'matrixColor2': _0x256c9b['matrixColor2'] || '#ffc0cb',
                'sequence': _0x256c9b['sequence'] || _0x57c643(0x16b),
                'sequenceColor': _0x256c9b['sequenceColor'] || '#d39b9b',
                'gift': _0x256c9b[_0x57c643(0xbc)] || '',
                'enableBook': _0x256c9b[_0x57c643(0x103)] === !![],
                'enableHeart': _0x256c9b[_0x57c643(0x151)] === !![],
                'pages': _0x256c9b[_0x57c643(0x10d)] || []
            },
            pages = window[_0x57c643(0xf8)]['pages'],
            await new Promise(_0x37d2d6 => setTimeout(_0x37d2d6, 0x3e8)),
            removeLoadingUI(),
            resetWebsiteState(),
            window[_0x57c643(0x135)] = !![];
            if (typeof startWebsite === _0x57c643(0x149))
                tryStartWebsiteWhenLandscape();
            ;
        } else
            throw new Error(_0x31bb98[_0x57c643(0x16d)] || _0x57c643(0xe6));
    } catch (_0x17886f) {
        initializeDefaultSettings(),
        applyLoadedSettings(),
        window['isWebsiteReady'] = !![];
        if (typeof startWebsite === _0x57c643(0x149))
            tryStartWebsiteWhenLandscape();
        ;
    }
}
applySettingsButton[a0_0x19d3d4(0x129)](a0_0x19d3d4(0x91), () => {
    const _0x3c2324 = a0_0x19d3d4
      , _0x403c15 = settings['pages'][_0x3c2324(0x12e)];
    if (_0x403c15 > 0x1 && _0x403c15 % 0x2 === 0x0) {
        alert('❌\x20' + t('invalidPageStructure') + '\x0a\x0a' + t(_0x3c2324(0xa0), {
            'total': _0x403c15
        }) + '\x0a' + t('bookStructureGuide') + '\x0a\x0a' + t(_0x3c2324(0x101)));
        return;
    }
    settings['music'] = document[_0x3c2324(0x174)](_0x3c2324(0xec))['value'],
    settings[_0x3c2324(0xab)] = parseInt(document['getElementById'](_0x3c2324(0xdf))[_0x3c2324(0x11f)]) || 0x3,
    settings[_0x3c2324(0xb9)] = document[_0x3c2324(0x174)](_0x3c2324(0xb9))[_0x3c2324(0x11f)] || _0x3c2324(0x117),
    settings['matrixColor1'] = document[_0x3c2324(0x174)](_0x3c2324(0xa9))[_0x3c2324(0x11f)],
    settings[_0x3c2324(0xe9)] = document[_0x3c2324(0x174)](_0x3c2324(0xe9))[_0x3c2324(0x11f)],
    settings[_0x3c2324(0x10f)] = document['getElementById'](_0x3c2324(0xf6))['value'] || _0x3c2324(0x152),
    settings['sequenceColor'] = document[_0x3c2324(0x174)]('sequenceColor')[_0x3c2324(0x11f)],
    settings[_0x3c2324(0xbc)] = document['getElementById'](_0x3c2324(0x93))[_0x3c2324(0x11f)],
    settings[_0x3c2324(0x103)] = document['getElementById'](_0x3c2324(0x103))[_0x3c2324(0x11f)] === 'true',
    settings[_0x3c2324(0x151)] = document[_0x3c2324(0x174)](_0x3c2324(0x151))[_0x3c2324(0x11f)] === _0x3c2324(0x126);
    const _0x4046b5 = [];
    settings['pages'][_0x3c2324(0x108)]( (_0x30aae4, _0x1cb260) => {
        const _0x888b9d = _0x3c2324
          , _0x48f7b0 = document['getElementById'](_0x888b9d(0xea) + _0x1cb260)
          , _0x4e8728 = document[_0x888b9d(0x174)](_0x888b9d(0xbe) + _0x1cb260)
          , _0x143443 = {};
        _0x48f7b0[_0x888b9d(0xb3)][_0x888b9d(0x12e)] > 0x0 ? _0x143443[_0x888b9d(0x168)] = URL[_0x888b9d(0x15c)](_0x48f7b0[_0x888b9d(0xb3)][0x0]) : _0x143443[_0x888b9d(0x168)] = _0x30aae4[_0x888b9d(0x168)],
        _0x4e8728 && (_0x143443[_0x888b9d(0x12d)] = _0x4e8728['value']),
        _0x4046b5[_0x888b9d(0x162)](_0x143443);
    }
    ),
    settings[_0x3c2324(0x10d)] = _0x4046b5;
    window[_0x3c2324(0xb4)] && window[_0x3c2324(0xb4)]['updateFromSettings'](settings);
    window['settings'] = settings,
    resetWebsiteState(),
    settingsModal[_0x3c2324(0xed)][_0x3c2324(0x142)] = _0x3c2324(0xe5);
    if (typeof startWebsite === 'function') {
        tryStartWebsiteWhenLandscape();
        ;
    }
}
);
function isAndroid() {
    return /android/i['test'](navigator['userAgent']);
}
const fullscreenBtn = document[a0_0x19d3d4(0x174)](a0_0x19d3d4(0xfd));
fullscreenBtn[a0_0x19d3d4(0xed)][a0_0x19d3d4(0x16e)] = 0x897b4f;
function updateFullscreenBtnVisibility() {
    const _0x398403 = a0_0x19d3d4;
    if (fullscreenBtn && isAndroid() && !document[_0x398403(0x107)]) {
        fullscreenBtn[_0x398403(0xed)]['display'] = 'block';
        if (fullscreenBtn[_0x398403(0x166)])
            clearTimeout(fullscreenBtn['hideTimeout']);
        fullscreenBtn[_0x398403(0x166)] = setTimeout( () => {
            const _0x3c7be6 = _0x398403;
            fullscreenBtn['style'][_0x3c7be6(0x142)] = 'none';
        }
        , 0x9c4);
    } else {
        if (fullscreenBtn) {
            fullscreenBtn['style'][_0x398403(0x142)] = _0x398403(0xe5);
            if (fullscreenBtn['hideTimeout'])
                clearTimeout(fullscreenBtn[_0x398403(0x166)]);
        }
    }
}
updateFullscreenBtnVisibility(),
fullscreenBtn[a0_0x19d3d4(0xb6)] = function() {
    const _0x24bf56 = a0_0x19d3d4
      , _0x31ba91 = document[_0x24bf56(0xa5)];
    _0x31ba91[_0x24bf56(0x134)] ? document[_0x24bf56(0x107)] ? document[_0x24bf56(0xee)]() : _0x31ba91[_0x24bf56(0x134)]() : alert(t(_0x24bf56(0xc7)));
    fullscreenBtn[_0x24bf56(0xed)]['display'] = _0x24bf56(0xe5);
    if (fullscreenBtn['hideTimeout'])
        clearTimeout(fullscreenBtn[_0x24bf56(0x166)]);
}
,
document[a0_0x19d3d4(0x129)](a0_0x19d3d4(0x161), function() {
    updateFullscreenBtnVisibility();
});
function isLandscapeMode() {
    const _0x5a577a = a0_0x19d3d4;
    return window[_0x5a577a(0xa7)] > window[_0x5a577a(0xdc)];
}
function tryStartWebsiteWhenLandscape() {
    const _0x351351 = a0_0x19d3d4;
    window[_0x351351(0x135)] && typeof startWebsite === 'function' && (isLandscapeMode() ? startWebsite() : window[_0x351351(0x129)](_0x351351(0xe4), function _0x261373() {
        const _0xc660bb = _0x351351;
        isLandscapeMode() && (startWebsite(),
        window[_0xc660bb(0x13c)]('resize', _0x261373));
    }));
}
