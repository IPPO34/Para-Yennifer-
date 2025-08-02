const a0_0x49c502 = a0_0x27d8;
(function(_0x31c9a7, _0xc4317e) {
    const _0x5d957c = a0_0x27d8
      , _0x3ad658 = _0x31c9a7();
    while (!![]) {
        try {
            const _0x12d80d = -parseInt(_0x5d957c(0x2f3)) / 0x1 + -parseInt(_0x5d957c(0x1f8)) / 0x2 + -parseInt(_0x5d957c(0x2b1)) / 0x3 + parseInt(_0x5d957c(0x26a)) / 0x4 + -parseInt(_0x5d957c(0x24c)) / 0x5 * (parseInt(_0x5d957c(0x215)) / 0x6) + -parseInt(_0x5d957c(0x2cf)) / 0x7 + parseInt(_0x5d957c(0x2d8)) / 0x8 * (parseInt(_0x5d957c(0x226)) / 0x9);
            if (_0x12d80d === _0xc4317e)
                break;
            else
                _0x3ad658['push'](_0x3ad658['shift']());
        } catch (_0x3ab984) {
            _0x3ad658['push'](_0x3ad658['shift']());
        }
    }
}(a0_0x218b, 0x2fc50));
class PricingCalculator {
    constructor() {
        const _0x2db17e = a0_0x27d8;
        this[_0x2db17e(0x1f1)] = {
            'defaultMusic': 0x0,
            'customMusic': 0x1388,
            'bookEnabled': 0x4e20,
            'extraPage': 0xbb8,
            'heartEffect': 0x1388
        },
        this[_0x2db17e(0x2ac)] = {
            'music': _0x2db17e(0x24a),
            'enableBook': ![],
            'enableHeart': ![],
            'pages': []
        },
        this['selectedVoucher'] = null,
        this[_0x2db17e(0x239)] = [],
        this[_0x2db17e(0x1fa)](),
        this[_0x2db17e(0x2e6)](),
        this[_0x2db17e(0x2e1)]();
    }
    ['createPricingUI']() {
        const _0x37fbc8 = a0_0x27d8
          , _0x2da108 = document[_0x37fbc8(0x23b)](_0x37fbc8(0x2de));
        _0x2da108['id'] = _0x37fbc8(0x235),
        _0x2da108[_0x37fbc8(0x231)][_0x37fbc8(0x26b)] = _0x37fbc8(0x2ca),
        _0x2da108['innerHTML'] = _0x37fbc8(0x1fb) + t(_0x37fbc8(0x2d6)) + _0x37fbc8(0x209) + t(_0x37fbc8(0x2ec)) + _0x37fbc8(0x2bc) + t(_0x37fbc8(0x2a4)) + _0x37fbc8(0x2c6) + t(_0x37fbc8(0x1fe)) + _0x37fbc8(0x28a) + t(_0x37fbc8(0x2bd)) + _0x37fbc8(0x20b),
        document[_0x37fbc8(0x257)][_0x37fbc8(0x24e)](_0x2da108);
        const _0x3e562c = document[_0x37fbc8(0x1e2)](_0x37fbc8(0x2a2))
          , _0x9c24bd = document['getElementById'](_0x37fbc8(0x2b4))
          , _0x5afa4b = document[_0x37fbc8(0x1e2)](_0x37fbc8(0x1e1));
        let _0x20a6ec = ![];
        const _0x343df2 = document[_0x37fbc8(0x1e2)](_0x37fbc8(0x2cb));
        _0x343df2 && _0x343df2[_0x37fbc8(0x251)](_0x37fbc8(0x283), () => {
            const _0x1d5a3 = _0x37fbc8;
            if (!window[_0x1d5a3(0x2ed)])
                window[_0x1d5a3(0x2ed)] = {};
            window[_0x1d5a3(0x2ed)][_0x1d5a3(0x2a4)] = parseInt(_0x343df2[_0x1d5a3(0x2aa)]) || 0x0,
            this[_0x1d5a3(0x2e1)]();
        }
        );
        _0x3e562c[_0x37fbc8(0x251)]('click', () => {
            const _0xda7528 = _0x37fbc8;
            _0x20a6ec = !_0x20a6ec,
            _0x20a6ec ? (_0x9c24bd[_0xda7528(0x231)]['display'] = _0xda7528(0x29f),
            _0x5afa4b[_0xda7528(0x231)][_0xda7528(0x1e3)] = _0xda7528(0x29f),
            _0x2da108[_0xda7528(0x231)][_0xda7528(0x229)] = '10px\x2020px',
            _0x3e562c['textContent'] = '+') : (_0x9c24bd[_0xda7528(0x231)]['display'] = _0xda7528(0x2e4),
            localStorage[_0xda7528(0x1f5)](_0xda7528(0x2a5)) && (_0x5afa4b[_0xda7528(0x231)][_0xda7528(0x1e3)] = _0xda7528(0x2e4)),
            _0x2da108[_0xda7528(0x231)][_0xda7528(0x229)] = '15px\x2020px',
            _0x3e562c[_0xda7528(0x249)] = '−');
        }
        );
        const _0x2df40b = document['getElementById']('actionButton');
        _0x2df40b[_0x37fbc8(0x251)](_0x37fbc8(0x287), () => {
            const _0x3a893a = _0x37fbc8;
            this[_0x3a893a(0x2d7)]();
        }
        );
        const _0x220dad = window[_0x37fbc8(0x290)](_0x37fbc8(0x2be))
          , _0x1a3688 = _0x4ee3b8 => {
            const _0x67fcff = _0x37fbc8;
            _0x4ee3b8[_0x67fcff(0x217)] ? _0x2da108[_0x67fcff(0x231)]['cssText'] += _0x67fcff(0x220) : _0x2da108[_0x67fcff(0x231)][_0x67fcff(0x26b)] = _0x2da108[_0x67fcff(0x231)]['cssText'][_0x67fcff(0x2f2)](/bottom: 10px;|left: 10px;|padding: 8px 12px;|font-size: 12px;|max-width: 200px;/g, '');
        }
        ;
        _0x220dad[_0x37fbc8(0x225)](_0x1a3688),
        _0x1a3688(_0x220dad);
    }
    [a0_0x49c502(0x2e6)]() {
        const _0x418b6c = a0_0x49c502
          , _0x55add4 = localStorage[_0x418b6c(0x1f5)]('user_uid');
        if (_0x55add4) {
            const _0x228acc = document['getElementById']('voucherSection');
            _0x228acc && (_0x228acc[_0x418b6c(0x231)]['display'] = _0x418b6c(0x2e4)),
            this[_0x418b6c(0x27d)]();
        } else {}
        const _0x55e0eb = document[_0x418b6c(0x1e2)](_0x418b6c(0x267));
        _0x55e0eb && _0x55e0eb['addEventListener'](_0x418b6c(0x2c7), _0x3fc690 => {
            const _0x42106f = _0x418b6c;
            _0x3fc690[_0x42106f(0x205)][_0x42106f(0x21d)] === _0x42106f(0x2ec) && this['handleVoucherChange'](_0x3fc690);
        }
        );
    }
    async[a0_0x49c502(0x27d)]() {
        const _0x4f4a0c = a0_0x49c502
          , _0x292351 = document[_0x4f4a0c(0x1e2)](_0x4f4a0c(0x267))
          , _0x40a93f = document[_0x4f4a0c(0x1e2)](_0x4f4a0c(0x2d1));
        if (!_0x292351) {
            console[_0x4f4a0c(0x26f)]('🎫\x20[VOUCHER\x20LOAD]\x20voucherList\x20element\x20not\x20found');
            return;
        }
        _0x292351[_0x4f4a0c(0x20f)] = 'Đang\x20tải\x20voucher...';
        if (_0x40a93f)
            _0x40a93f[_0x4f4a0c(0x231)][_0x4f4a0c(0x1e3)] = 'none';
        this[_0x4f4a0c(0x238)] = null,
        this[_0x4f4a0c(0x239)] = [];
        const _0x310420 = localStorage[_0x4f4a0c(0x1f5)](_0x4f4a0c(0x2a5));
        if (!_0x310420) {
            _0x292351[_0x4f4a0c(0x20f)] = _0x4f4a0c(0x1f0) + t(_0x4f4a0c(0x23e)) + '</span>';
            return;
        }
        try {
            const _0x270ab4 = await fetch(_0x4f4a0c(0x1d8) + _0x310420)
              , _0x439ab6 = await _0x270ab4[_0x4f4a0c(0x242)]();
            if (!_0x439ab6[_0x4f4a0c(0x27e)]) {
                console[_0x4f4a0c(0x26f)](_0x4f4a0c(0x2a0), _0x439ab6[_0x4f4a0c(0x25a)]),
                _0x292351['innerHTML'] = _0x4f4a0c(0x1f0) + _0x439ab6[_0x4f4a0c(0x25a)] + _0x4f4a0c(0x23f);
                return;
            }
            if (!_0x439ab6['data'] || !_0x439ab6['data'][_0x4f4a0c(0x230)]) {
                _0x292351[_0x4f4a0c(0x20f)] = _0x4f4a0c(0x228) + t(_0x4f4a0c(0x1ea)) + _0x4f4a0c(0x23f);
                return;
            }
            this[_0x4f4a0c(0x239)] = _0x439ab6[_0x4f4a0c(0x254)],
            _0x292351[_0x4f4a0c(0x20f)] = this[_0x4f4a0c(0x239)][_0x4f4a0c(0x261)]( (_0x117a0b, _0x42f2d8) => _0x4f4a0c(0x288) + _0x42f2d8 + '\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x204px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,255,255,0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x22\x20onmouseover=\x22this.style.background=\x27rgba(255,255,255,0.1)\x27\x22\x20onmouseout=\x22this.style.background=\x27transparent\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22checkbox\x22\x20type=\x22checkbox\x22\x20name=\x22voucher\x22\x20id=\x22voucher_' + _0x42f2d8 + _0x4f4a0c(0x203) + _0x42f2d8 + _0x4f4a0c(0x2f4) + _0x117a0b[_0x4f4a0c(0x266)] + _0x4f4a0c(0x22b) + t(_0x4f4a0c(0x248), {
                'code': _0x117a0b[_0x4f4a0c(0x266)],
                'discount': _0x117a0b[_0x4f4a0c(0x2d9)]
            }) + _0x4f4a0c(0x218) + new Date(_0x117a0b[_0x4f4a0c(0x268)])[_0x4f4a0c(0x1f3)]() + _0x4f4a0c(0x2d2))[_0x4f4a0c(0x2a7)](''),
            this[_0x4f4a0c(0x2e1)]();
        } catch (_0x161123) {
            console[_0x4f4a0c(0x26f)]('🎫\x20[VOUCHER\x20LOAD]\x20Error\x20loading\x20vouchers:', _0x161123),
            _0x292351[_0x4f4a0c(0x20f)] = _0x4f4a0c(0x1e0);
        }
    }
    ['handleVoucherChange'](_0x1cad4e) {
        const _0x3a5662 = a0_0x49c502
          , _0x2535e9 = document[_0x3a5662(0x1e2)](_0x3a5662(0x267))
          , _0x32240b = document['getElementById'](_0x3a5662(0x2d1));
        if (!_0x2535e9 || !this['vouchers'])
            return;
        const _0x3cdddd = _0x2535e9[_0x3a5662(0x1d7)](_0x3a5662(0x1f4))
          , _0x2317b0 = Array['from'](_0x3cdddd)['findIndex'](_0x31389b => _0x31389b === _0x1cad4e[_0x3a5662(0x205)]);
        _0x1cad4e[_0x3a5662(0x205)]['checked'] ? (_0x3cdddd[_0x3a5662(0x2d5)]( (_0x20b971, _0x2f3a95) => _0x20b971['checked'] = _0x2f3a95 === _0x2317b0),
        this[_0x3a5662(0x238)] = this[_0x3a5662(0x239)][_0x2317b0],
        _0x32240b && (_0x32240b['innerHTML'] = t(_0x3a5662(0x248), {
            'code': this[_0x3a5662(0x238)][_0x3a5662(0x266)],
            'discount': this[_0x3a5662(0x238)][_0x3a5662(0x2d9)]
        }),
        _0x32240b[_0x3a5662(0x231)][_0x3a5662(0x1e3)] = 'block')) : (this[_0x3a5662(0x238)] = null,
        _0x32240b && (_0x32240b[_0x3a5662(0x231)][_0x3a5662(0x1e3)] = _0x3a5662(0x29f))),
        this[_0x3a5662(0x2e1)]();
    }
    [a0_0x49c502(0x22c)]() {
        const _0x435d39 = a0_0x49c502;
        this[_0x435d39(0x238)] = null,
        this[_0x435d39(0x239)] = [];
        const _0x5e7e44 = document[_0x435d39(0x1e2)](_0x435d39(0x1e1))
          , _0x5ba252 = document[_0x435d39(0x1e2)](_0x435d39(0x2d1))
          , _0x57247c = document[_0x435d39(0x1e2)](_0x435d39(0x267));
        if (_0x5e7e44)
            _0x5e7e44[_0x435d39(0x231)][_0x435d39(0x1e3)] = _0x435d39(0x29f);
        if (_0x5ba252)
            _0x5ba252[_0x435d39(0x231)][_0x435d39(0x1e3)] = _0x435d39(0x29f);
        if (_0x57247c)
            _0x57247c[_0x435d39(0x20f)] = '';
        this[_0x435d39(0x2e1)]();
    }
    [a0_0x49c502(0x2a6)](_0x37a864) {
        const _0x118af9 = a0_0x49c502
          , _0x4627d5 = [];
        let _0x1372c2 = 0x0;
        const _0x399c84 = _0x37a864['music'] !== './music/happy-birthday.mp3';
        _0x399c84 && (_0x4627d5[_0x118af9(0x2ae)]({
            'name': _0x118af9(0x2ad),
            'price': this[_0x118af9(0x1f1)][_0x118af9(0x210)],
            'icon': '🎵'
        }),
        _0x1372c2 += this[_0x118af9(0x1f1)][_0x118af9(0x210)]);
        if (_0x37a864['enableBook']) {
            _0x4627d5[_0x118af9(0x2ae)]({
                'name': 'Sách\x20kỷ\x20niệm',
                'price': this[_0x118af9(0x1f1)][_0x118af9(0x2d3)],
                'icon': '📖'
            }),
            _0x1372c2 += this[_0x118af9(0x1f1)][_0x118af9(0x2d3)];
            const _0x41ec5f = _0x37a864[_0x118af9(0x299)] ? _0x37a864[_0x118af9(0x299)][_0x118af9(0x230)] : 0x0;
            if (_0x41ec5f > 0xa) {
                const _0x3b51fd = _0x41ec5f - 0xa
                  , _0x2188fe = _0x3b51fd * this[_0x118af9(0x1f1)]['extraPage'];
                _0x4627d5['push']({
                    'name': _0x118af9(0x27b) + _0x3b51fd + _0x118af9(0x2db),
                    'price': _0x2188fe,
                    'icon': '📄'
                }),
                _0x1372c2 += _0x2188fe;
            }
            _0x37a864[_0x118af9(0x1e5)] && (_0x4627d5[_0x118af9(0x2ae)]({
                'name': _0x118af9(0x285),
                'price': this[_0x118af9(0x1f1)][_0x118af9(0x1ec)],
                'icon': '💕'
            }),
            _0x1372c2 += this['basePrices'][_0x118af9(0x1ec)]);
        }
        let _0x808a6d = 0x0
          , _0x5055f0 = _0x1372c2;
        this[_0x118af9(0x238)] && _0x1372c2 > 0x0 && (_0x808a6d = Math[_0x118af9(0x29a)](_0x1372c2 * this[_0x118af9(0x238)][_0x118af9(0x2d9)] / 0x64),
        _0x5055f0 = _0x1372c2 - _0x808a6d,
        _0x4627d5[_0x118af9(0x2ae)]({
            'name': 'Voucher\x20' + this[_0x118af9(0x238)]['code'] + _0x118af9(0x1d9) + this[_0x118af9(0x238)][_0x118af9(0x2d9)] + '%)',
            'price': -_0x808a6d,
            'icon': '🎫'
        }));
        const _0xccff24 = _0x37a864[_0x118af9(0x2a4)] ? parseInt(_0x37a864['tip']) : 0x0;
        return _0xccff24 > 0x0 && (_0x4627d5[_0x118af9(0x2ae)]({
            'name': _0x118af9(0x22d),
            'price': _0xccff24,
            'icon': '💸'
        }),
        _0x1372c2 += _0xccff24,
        _0x5055f0 += _0xccff24),
        {
            'items': _0x4627d5,
            'total': _0x1372c2,
            'discount': _0x808a6d,
            'finalPrice': _0x5055f0
        };
    }
    [a0_0x49c502(0x204)](_0xfdd8ac) {
        const _0x1ab34a = a0_0x49c502;
        return new Intl[(_0x1ab34a(0x1f2))](_0x1ab34a(0x1e8),{
            'style': 'currency',
            'currency': 'VND',
            'minimumFractionDigits': 0x0
        })['format'](_0xfdd8ac);
    }
    [a0_0x49c502(0x2e1)](_0x522f90=null) {
        const _0x4c44f6 = a0_0x49c502
          , _0x21c839 = _0x522f90 || window['settings'] || this[_0x4c44f6(0x2ac)]
          , _0x2b53af = this[_0x4c44f6(0x2a6)](_0x21c839)
          , _0x2434c7 = document[_0x4c44f6(0x1e2)]('pricingDetails')
          , _0x1146db = document[_0x4c44f6(0x1e2)]('totalPrice')
          , _0x3c7696 = document[_0x4c44f6(0x1e2)](_0x4c44f6(0x26d))
          , _0x5e1893 = document[_0x4c44f6(0x1e2)](_0x4c44f6(0x2cb));
        if (!_0x2434c7 || !_0x1146db || !_0x3c7696)
            return;
        _0x5e1893 && (_0x21c839[_0x4c44f6(0x2a4)] = parseInt(_0x5e1893['value']) || 0x0);
        _0x2b53af['items']['length'] === 0x0 ? _0x2434c7[_0x4c44f6(0x20f)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20opacity:\x200.8;\x20font-style:\x20italic;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t(_0x4c44f6(0x2f1)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20' : _0x2434c7[_0x4c44f6(0x20f)] = _0x2b53af['items'][_0x4c44f6(0x261)](_0x3929e6 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20margin-bottom:\x208px;\x20padding:\x205px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22margin-right:\x205px;\x22>' + _0x3929e6['icon'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + (t(_0x3929e6['name']) || _0x3929e6[_0x4c44f6(0x21d)]) + _0x4c44f6(0x208) + (_0x3929e6[_0x4c44f6(0x213)] < 0x0 ? _0x4c44f6(0x23a) : _0x4c44f6(0x28c)) + _0x4c44f6(0x282) + (_0x3929e6['price'] < 0x0 ? '' : '+') + this['formatPrice'](_0x3929e6[_0x4c44f6(0x213)]) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20')[_0x4c44f6(0x2a7)]('');
        const _0x2d09dd = _0x2b53af[_0x4c44f6(0x212)] !== undefined ? _0x2b53af[_0x4c44f6(0x212)] : _0x2b53af[_0x4c44f6(0x1fe)];
        _0x1146db['textContent'] = this[_0x4c44f6(0x204)](_0x2d09dd),
        _0x2d09dd > 0x0 ? (_0x1146db[_0x4c44f6(0x231)][_0x4c44f6(0x20e)] = _0x4c44f6(0x21e),
        _0x3c7696[_0x4c44f6(0x249)] = t('payAndCreate'),
        _0x3c7696[_0x4c44f6(0x231)]['cssText'] += _0x4c44f6(0x2e2)) : (_0x1146db[_0x4c44f6(0x231)]['color'] = '#4caf50',
        _0x3c7696['textContent'] = t(_0x4c44f6(0x2bd)),
        _0x3c7696['style'][_0x4c44f6(0x26b)] += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#4caf50,\x20#66bb6a);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20'),
        this[_0x4c44f6(0x264)] = _0x2d09dd,
        this[_0x4c44f6(0x28e)] = _0x2b53af['total'];
    }
    async[a0_0x49c502(0x2d7)]() {
        const _0x44de65 = a0_0x49c502
          , _0x298ff5 = document[_0x44de65(0x1e2)](_0x44de65(0x26d))
          , _0x4cac65 = _0x298ff5['textContent'];
        _0x298ff5['disabled'] = !![],
        _0x298ff5[_0x44de65(0x231)][_0x44de65(0x272)] = _0x44de65(0x270);
        try {
            const _0x320447 = localStorage[_0x44de65(0x1f5)](_0x44de65(0x2a5));
            if (!_0x320447) {
                this['showNotification'](t(_0x44de65(0x27a)), 'error');
                return;
            }
            if (this[_0x44de65(0x264)] > 0x0 && this[_0x44de65(0x264)] < 0x2710) {
                this[_0x44de65(0x2c9)](_0x44de65(0x23c), _0x44de65(0x26f));
                return;
            }
            this[_0x44de65(0x264)] > 0x0 ? (_0x298ff5[_0x44de65(0x249)] = _0x44de65(0x1eb),
            await this[_0x44de65(0x265)]()) : (_0x298ff5[_0x44de65(0x249)] = '⏳\x20Đang\x20tạo...',
            await this[_0x44de65(0x2f5)]());
        } catch (_0x461db3) {
            console[_0x44de65(0x26f)](_0x44de65(0x2f0), _0x461db3),
            this['showNotification'](_0x44de65(0x292), 'error');
        } finally {
            _0x298ff5[_0x44de65(0x2ab)] = ![],
            _0x298ff5['textContent'] = _0x4cac65,
            _0x298ff5[_0x44de65(0x231)]['opacity'] = '1';
        }
    }
    async['handleFreeCreation']() {
        const _0x668c52 = a0_0x49c502;
        try {
            let _0x39892d = this[_0x668c52(0x236)]() || window[_0x668c52(0x2ed)] || this[_0x668c52(0x2ac)];
            if (_0x39892d['enableBook']) {
                const _0x475307 = _0x39892d[_0x668c52(0x299)]?.[_0x668c52(0x230)] || 0x0;
                if (_0x475307 > 0x1 && _0x475307 % 0x2 === 0x0) {
                    this[_0x668c52(0x2c9)]('❌\x20Cấu\x20trúc\x20trang\x20không\x20hợp\x20lệ!\x20Hiện\x20tại\x20có\x20' + _0x475307 + '\x20trang.\x20Vui\x20lòng\x20thêm\x20hoặc\x20xóa\x201\x20trang\x20để\x20tạo\x20cấu\x20trúc\x20hợp\x20lệ.', _0x668c52(0x26f));
                    return;
                }
            }
            const _0x51b9b7 = this['generateOrderCode']();
            let _0x292c99 = null;
            _0x39892d[_0x668c52(0x211)] && _0x39892d[_0x668c52(0x299)]?.[_0x668c52(0x230)] > 0x0 && (_0x292c99 = this['showProgressNotification'](_0x668c52(0x2e9)));
            const _0x553249 = this[_0x668c52(0x274)](_0x39892d);
            _0x292c99 && this[_0x668c52(0x293)](_0x292c99, _0x668c52(0x278));
            const _0x4a3b1c = await window['birthdayAPI'][_0x668c52(0x2b9)](_0x553249, _0x668c52(0x269));
            if (!_0x4a3b1c['success'])
                throw new Error(_0x4a3b1c['error'] || _0x668c52(0x2f6));
            _0x292c99 && this[_0x668c52(0x293)](_0x292c99, '📦\x20Đang\x20tạo\x20sản\x20phẩm...');
            const _0x190b8e = this[_0x668c52(0x2f7)](_0x4a3b1c[_0x668c52(0x27c)], _0x51b9b7, _0x668c52(0x298), 0x0)
              , _0x357542 = await this[_0x668c52(0x284)](_0x190b8e);
            this['selectedVoucher'] && (_0x292c99 && this[_0x668c52(0x293)](_0x292c99, _0x668c52(0x22a)),
            await this[_0x668c52(0x21f)](_0x51b9b7)),
            _0x292c99 && this[_0x668c52(0x22f)](_0x292c99),
            this[_0x668c52(0x2ee)](_0x4a3b1c[_0x668c52(0x27c)], 0x0),
            this[_0x668c52(0x289)]();
        } catch (_0x5ce3aa) {
            console[_0x668c52(0x26f)](_0x668c52(0x26e), _0x5ce3aa),
            console[_0x668c52(0x26f)]('❌\x20[CATCH\x20ERROR]\x20Error\x20stack:', _0x5ce3aa[_0x668c52(0x1dd)]),
            this[_0x668c52(0x2c9)](_0x668c52(0x241) + _0x5ce3aa[_0x668c52(0x25a)], _0x668c52(0x26f));
        }
    }
    async[a0_0x49c502(0x265)]() {
        const _0x240ab2 = a0_0x49c502;
        try {
            let _0x48281f = this[_0x240ab2(0x236)]() || window[_0x240ab2(0x2ed)] || this['defaultSettings'];
            if (_0x48281f[_0x240ab2(0x211)]) {
                const _0x6b0706 = _0x48281f[_0x240ab2(0x299)]?.[_0x240ab2(0x230)] || 0x0;
                if (_0x6b0706 > 0x1 && _0x6b0706 % 0x2 === 0x0) {
                    this[_0x240ab2(0x2c9)]('❌\x20Cấu\x20trúc\x20trang\x20không\x20hợp\x20lệ!\x20Hiện\x20tại\x20có\x20' + _0x6b0706 + _0x240ab2(0x294), _0x240ab2(0x26f));
                    return;
                }
            }
            const _0x544d89 = this[_0x240ab2(0x252)]();
            let _0x51832c = null;
            _0x48281f['enableBook'] && _0x48281f['pages']?.['length'] > 0x0 && (_0x51832c = this[_0x240ab2(0x271)](_0x240ab2(0x2e9)));
            const _0x29eadf = this[_0x240ab2(0x274)](_0x48281f);
            _0x51832c && this[_0x240ab2(0x293)](_0x51832c, _0x240ab2(0x278));
            const _0x2aeb91 = await window[_0x240ab2(0x1ff)][_0x240ab2(0x2b9)](_0x29eadf, _0x240ab2(0x295));
            if (!_0x2aeb91[_0x240ab2(0x27e)])
                throw new Error(_0x2aeb91[_0x240ab2(0x26f)] || _0x240ab2(0x2f6));
            _0x51832c && this[_0x240ab2(0x293)](_0x51832c, _0x240ab2(0x2eb));
            const _0x3a3cb8 = this[_0x240ab2(0x2f7)](_0x2aeb91[_0x240ab2(0x27c)], _0x544d89, _0x240ab2(0x2c4), this['originalTotal'])
              , _0x1a4a58 = await this[_0x240ab2(0x284)](_0x3a3cb8);
            let _0x1be70e = this[_0x240ab2(0x28e)];
            if (this[_0x240ab2(0x238)]) {
                _0x51832c && this[_0x240ab2(0x293)](_0x51832c, _0x240ab2(0x22a));
                try {
                    await this[_0x240ab2(0x21f)](_0x544d89),
                    _0x1be70e = this[_0x240ab2(0x264)];
                } catch (_0x513565) {
                    console[_0x240ab2(0x26f)](_0x240ab2(0x221), _0x513565),
                    this[_0x240ab2(0x2c9)]('⚠️\x20Lỗi\x20áp\x20dụng\x20voucher,\x20tiếp\x20tục\x20thanh\x20toán\x20với\x20giá\x20gốc', 'warning');
                }
            }
            _0x51832c && this[_0x240ab2(0x22f)](_0x51832c),
            _0x1be70e > 0x0 ? await this[_0x240ab2(0x201)](_0x544d89, _0x1be70e, _0x2aeb91[_0x240ab2(0x27c)]) : (this[_0x240ab2(0x2ee)](_0x2aeb91[_0x240ab2(0x27c)], 0x0),
            this['finishCreation']());
        } catch (_0x1a267a) {
            console[_0x240ab2(0x26f)](_0x240ab2(0x2c3), _0x1a267a),
            this[_0x240ab2(0x2c9)](_0x240ab2(0x297) + _0x1a267a[_0x240ab2(0x25a)], _0x240ab2(0x26f));
        }
    }
    ['generateOrderCode']() {
        const _0x2c8eb7 = a0_0x49c502
          , _0x3496b8 = Math[_0x2c8eb7(0x223)](0x1 + Math[_0x2c8eb7(0x1f7)]() * 0x9)
          , _0x48ac34 = _0x3496b8[_0x2c8eb7(0x29d)]() + Date[_0x2c8eb7(0x2c8)]()[_0x2c8eb7(0x29d)]()[_0x2c8eb7(0x2e7)](-0x8) + Math['floor'](0x64 + Math[_0x2c8eb7(0x1f7)]() * 0x384);
        return _0x48ac34;
    }
    ['prepareCompleteSettings'](_0x52be27) {
        const _0x15adaa = a0_0x49c502;
        return {
            'music': _0x52be27[_0x15adaa(0x291)] || _0x15adaa(0x29e),
            'countdown': _0x52be27[_0x15adaa(0x224)] || 0x3,
            'matrixText': _0x52be27['matrixText'] || _0x15adaa(0x2a8),
            'matrixColor1': _0x52be27[_0x15adaa(0x246)] || _0x15adaa(0x1e9),
            'matrixColor2': _0x52be27[_0x15adaa(0x24d)] || _0x15adaa(0x1de),
            'sequence': _0x52be27[_0x15adaa(0x2d4)] || _0x15adaa(0x253),
            'sequenceColor': _0x52be27[_0x15adaa(0x1e6)] || _0x15adaa(0x207),
            'gift': _0x52be27[_0x15adaa(0x2cc)] || '',
            'enableBook': _0x52be27[_0x15adaa(0x211)] !== undefined ? _0x52be27[_0x15adaa(0x211)] : ![],
            'enableHeart': _0x52be27[_0x15adaa(0x1e5)] !== undefined ? _0x52be27[_0x15adaa(0x1e5)] : ![],
            'pages': _0x52be27['pages'] || []
        };
    }
    [a0_0x49c502(0x2f7)](_0x4432de, _0x59b912, _0x4cfe32, _0xe2cb21) {
        const _0x173b2f = a0_0x49c502
          , _0xfae107 = localStorage[_0x173b2f(0x1f5)](_0x173b2f(0x2a5))
          , _0x58f0e8 = window[_0x173b2f(0x25b)][_0x173b2f(0x25f)] + window[_0x173b2f(0x25b)][_0x173b2f(0x2c1)] + _0x173b2f(0x255) + _0x4432de;
        return {
            'uid': _0xfae107,
            'orderCode': _0x59b912[_0x173b2f(0x29d)](),
            'name': _0x173b2f(0x234),
            'type': _0x173b2f(0x258),
            'price': _0xe2cb21,
            'images': 'https://cdn.deargift.online/uploads/Screenshot%202025-07-08%20123133.png',
            'linkproduct': _0x58f0e8,
            'configId': _0x4432de,
            'status': _0x4cfe32,
            'createdAt': new Date()
        };
    }
    async[a0_0x49c502(0x284)](_0x3f1db1) {
        const _0x3bbdb9 = a0_0x49c502;
        try {
            const _0x2a8abe = await fetch(_0x3bbdb9(0x279), {
                'method': _0x3bbdb9(0x247),
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON[_0x3bbdb9(0x280)](_0x3f1db1)
            })
              , _0x1359fe = await _0x2a8abe['json']();
            if (_0x1359fe[_0x3bbdb9(0x27e)])
                return _0x1359fe[_0x3bbdb9(0x254)];
            else
                throw new Error(_0x1359fe['message'] || _0x3bbdb9(0x2ef));
        } catch (_0x130e48) {
            throw new Error(_0x3bbdb9(0x275) + _0x130e48[_0x3bbdb9(0x25a)]);
        }
    }
    async['applyVoucher'](_0x5178f0) {
        const _0x215a5a = a0_0x49c502;
        try {
            const _0x49cc70 = localStorage[_0x215a5a(0x1f5)](_0x215a5a(0x2a5))
              , _0x26237b = await fetch(_0x215a5a(0x227), {
                'method': _0x215a5a(0x247),
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON[_0x215a5a(0x280)]({
                    'uid': _0x49cc70,
                    'code': this[_0x215a5a(0x238)][_0x215a5a(0x266)],
                    'orderCode': _0x5178f0[_0x215a5a(0x29d)]()
                })
            })
              , _0x452bd5 = await _0x26237b[_0x215a5a(0x242)]();
            if (!_0x452bd5[_0x215a5a(0x27e)])
                throw new Error(_0x452bd5[_0x215a5a(0x25a)] || _0x215a5a(0x2e8));
            return this[_0x215a5a(0x2c9)](_0x215a5a(0x28f), 'success'),
            _0x452bd5;
        } catch (_0x52a6f7) {
            console[_0x215a5a(0x26f)]('❌\x20[VOUCHER]\x20Error\x20applying\x20voucher:', _0x52a6f7);
            throw _0x52a6f7;
        }
    }
    async[a0_0x49c502(0x201)](_0x3690a9, _0x2634f8, _0x775404) {
        const _0x10c52e = a0_0x49c502;
        try {
            const _0x221743 = localStorage[_0x10c52e(0x1f5)](_0x10c52e(0x2a5))
              , _0x2d1d8f = localStorage[_0x10c52e(0x1f5)](_0x10c52e(0x25e)) || ''
              , _0x311ca8 = {
                'amount': _0x2634f8,
                'description': _0x10c52e(0x234),
                'orderCode': Number(_0x3690a9),
                'uid': _0x221743,
                'customerEmail': _0x2d1d8f
            };
            this[_0x10c52e(0x2c9)]('🔄\x20Đang\x20chuyển\x20đến\x20trang\x20thanh\x20toán...', _0x10c52e(0x240));
            const _0x562b3c = await fetch(_0x10c52e(0x2ea), {
                'method': _0x10c52e(0x247),
                'headers': {
                    'Content-Type': _0x10c52e(0x233)
                },
                'body': JSON[_0x10c52e(0x280)](_0x311ca8)
            })
              , _0x491e42 = await _0x562b3c['json']();
            if (!_0x491e42['data']?.[_0x10c52e(0x2b3)])
                throw new Error(_0x10c52e(0x22e));
            this[_0x10c52e(0x25d)](_0x491e42[_0x10c52e(0x254)]['checkoutUrl'], _0x775404, _0x2634f8);
        } catch (_0x54cff6) {
            throw new Error(_0x10c52e(0x2c5) + _0x54cff6[_0x10c52e(0x25a)]);
        }
    }
    ['showPaymentModal'](_0x322cd7, _0x1e8102, _0x6e3272) {
        const _0x3b28a7 = a0_0x49c502;
        let _0x3eac32 = document[_0x3b28a7(0x1e2)]('paymentModal');
        !_0x3eac32 && (_0x3eac32 = document[_0x3b28a7(0x23b)]('div'),
        _0x3eac32['id'] = 'paymentModal',
        _0x3eac32[_0x3b28a7(0x231)][_0x3b28a7(0x26b)] = _0x3b28a7(0x256),
        _0x3eac32[_0x3b28a7(0x20f)] = _0x3b28a7(0x21a),
        document[_0x3b28a7(0x257)][_0x3b28a7(0x24e)](_0x3eac32));
        const _0x442aab = _0x3eac32[_0x3b28a7(0x2b8)](_0x3b28a7(0x244))
          , _0x58d85e = _0x3eac32['querySelector'](_0x3b28a7(0x237));
        if (_0x58d85e)
            _0x58d85e[_0x3b28a7(0x276)] = _0x322cd7;
        return _0x3eac32['style'][_0x3b28a7(0x1e3)] = _0x3b28a7(0x2e4),
        _0x442aab && (_0x442aab[_0x3b28a7(0x27f)] = () => {
            const _0x43582e = _0x3b28a7;
            _0x3eac32[_0x43582e(0x231)][_0x43582e(0x1e3)] = 'none';
        }
        ),
        new Promise(_0x36f939 => {
            const _0x1a6cf6 = _0x3b28a7
              , _0x2295cd = async _0x295ae4 => {
                const _0x539488 = a0_0x27d8;
                _0x295ae4[_0x539488(0x254)]?.[_0x539488(0x1ef)] === _0x539488(0x2cd) && (_0x3eac32[_0x539488(0x231)][_0x539488(0x1e3)] = _0x539488(0x29f),
                this[_0x539488(0x2ee)](_0x1e8102, _0x6e3272),
                this[_0x539488(0x289)](),
                window['removeEventListener']('message', _0x2295cd),
                _0x36f939());
            }
            ;
            window[_0x1a6cf6(0x251)](_0x1a6cf6(0x25a), _0x2295cd);
        }
        );
    }
    [a0_0x49c502(0x2ee)](_0x3518b6, _0x3fd8a6) {
        const _0x1189da = a0_0x49c502
          , _0x217414 = window[_0x1189da(0x1ff)]['createShareableURL'](_0x3518b6)
          , _0x4e2e10 = _0x3fd8a6 > 0x0 ? _0x1189da(0x1f9) + _0x3fd8a6[_0x1189da(0x2a1)]() + _0x1189da(0x20c) : '<span\x20style=\x22color:#4caf50;font-weight:bold;\x22>' + t(_0x1189da(0x20d)) + _0x1189da(0x23f);
        this[_0x1189da(0x2c9)](_0x1189da(0x20a), _0x1189da(0x27e)),
        this[_0x1189da(0x1e7)](_0x3518b6);
        const _0x2af710 = document[_0x1189da(0x23b)]('div');
        _0x2af710[_0x1189da(0x231)][_0x1189da(0x26b)] = _0x1189da(0x216),
        _0x2af710[_0x1189da(0x20f)] = _0x1189da(0x1db) + t(_0x1189da(0x2e0)) + _0x1189da(0x2d0) + t('price') + _0x1189da(0x2c0) + _0x4e2e10 + '\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>' + t(_0x1189da(0x2ba)) + _0x1189da(0x222) + _0x217414 + _0x1189da(0x2ce) + t('copyLink') + _0x1189da(0x2da) + t(_0x1189da(0x2b2)) + _0x1189da(0x2bf) + t('close') + _0x1189da(0x2dd) + t(_0x1189da(0x2df)) + _0x1189da(0x281) + t(_0x1189da(0x2bb)) + _0x1189da(0x28d) + t('heartQr') + _0x1189da(0x21b);
        const _0x571409 = _0x2af710[_0x1189da(0x2b8)](_0x1189da(0x245));
        _0x571409 && (_0x571409[_0x1189da(0x27f)] = () => {
            const _0x4651cf = _0x1189da
              , _0x4a074a = _0x4651cf(0x2e5);
            navigator[_0x4651cf(0x2a3)]['writeText'](_0x4a074a)['then']( () => {
                const _0x21edfe = _0x4651cf;
                this[_0x21edfe(0x2c9)](t('heartQrCopy'), _0x21edfe(0x27e)),
                window['open'](_0x4a074a, _0x21edfe(0x1ed));
            }
            )[_0x4651cf(0x2b5)]( () => {
                const _0x3aeb10 = _0x4651cf;
                window[_0x3aeb10(0x2b6)](_0x4a074a, _0x3aeb10(0x1ed));
            }
            );
        }
        );
        document['body'][_0x1189da(0x24e)](_0x2af710);
        const _0x414308 = _0x2af710[_0x1189da(0x2b8)](_0x1189da(0x200))
          , _0x1dc4a2 = _0x2af710[_0x1189da(0x2b8)]('#openSuccessLinkBtn')
          , _0x56d98a = _0x2af710['querySelector'](_0x1189da(0x243));
        _0x414308 && (_0x414308[_0x1189da(0x27f)] = () => {
            const _0x63e58e = _0x1189da;
            navigator['clipboard'][_0x63e58e(0x2b7)](_0x217414)['then']( () => {
                const _0x415394 = _0x63e58e;
                this[_0x415394(0x2c9)](t(_0x415394(0x2dc)), _0x415394(0x27e));
            }
            );
        }
        ),
        _0x1dc4a2 && (_0x1dc4a2['onclick'] = () => {
            const _0x3aef06 = _0x1189da;
            window[_0x3aef06(0x2b6)](_0x217414, _0x3aef06(0x1ed));
        }
        ),
        _0x56d98a && (_0x56d98a[_0x1189da(0x27f)] = () => {
            const _0x13b27f = _0x1189da;
            _0x2af710['parentNode'] && _0x2af710[_0x13b27f(0x286)][_0x13b27f(0x232)](_0x2af710);
        }
        );
    }
    ['finishCreation']() {
        const _0x3f5b1f = a0_0x49c502
          , _0x535177 = document['getElementById']('settingsModal');
        _0x535177 && (_0x535177[_0x3f5b1f(0x231)][_0x3f5b1f(0x1e3)] = _0x3f5b1f(0x29f)),
        typeof startWebsite === 'function' && startWebsite();
    }
    [a0_0x49c502(0x236)]() {
        const _0x3f9323 = a0_0x49c502
          , _0x1cc16e = document[_0x3f9323(0x1e2)](_0x3f9323(0x214));
        if (!_0x1cc16e || _0x1cc16e[_0x3f9323(0x231)][_0x3f9323(0x1e3)] === 'none')
            return null;
        try {
            const _0x5cf419 = {
                'music': document[_0x3f9323(0x1e2)](_0x3f9323(0x1dc))?.[_0x3f9323(0x2aa)] || './music/happybirtday_uia.mp3',
                'countdown': parseInt(document[_0x3f9323(0x1e2)](_0x3f9323(0x26c))?.[_0x3f9323(0x2aa)]) || 0x3,
                'matrixText': document[_0x3f9323(0x1e2)](_0x3f9323(0x1df))?.['value'] || _0x3f9323(0x2a8),
                'matrixColor1': document[_0x3f9323(0x1e2)](_0x3f9323(0x246))?.[_0x3f9323(0x2aa)] || '#ffb6c1',
                'matrixColor2': document[_0x3f9323(0x1e2)](_0x3f9323(0x24d))?.[_0x3f9323(0x2aa)] || _0x3f9323(0x1de),
                'sequence': document[_0x3f9323(0x1e2)]('sequenceText')?.['value'] || 'HAPPY|BIRTHDAY|MY|CUTEE|LITTLE|SWARALI|❤',
                'sequenceColor': document[_0x3f9323(0x1e2)](_0x3f9323(0x1e6))?.[_0x3f9323(0x2aa)] || _0x3f9323(0x207),
                'gift': document[_0x3f9323(0x1e2)]('giftImage')?.[_0x3f9323(0x2aa)] || '',
                'enableBook': document[_0x3f9323(0x1e2)](_0x3f9323(0x211))?.[_0x3f9323(0x2aa)] === 'true',
                'enableHeart': document[_0x3f9323(0x1e2)](_0x3f9323(0x1e5))?.[_0x3f9323(0x2aa)] === 'true',
                'pages': this[_0x3f9323(0x2e3)]()
            };
            return _0x5cf419;
        } catch (_0x5d14dd) {
            return null;
        }
    }
    ['getPagesFromModal']() {
        const _0x3ffe2b = a0_0x49c502;
        try {
            const _0x39708f = []
              , _0x2c34d0 = window[_0x3ffe2b(0x2ed)] || this[_0x3ffe2b(0x2ac)]
              , _0x219818 = _0x2c34d0[_0x3ffe2b(0x299)] || [];
            return _0x219818[_0x3ffe2b(0x2d5)]( (_0x5ee5cb, _0x1f6294) => {
                const _0x3999ce = _0x3ffe2b
                  , _0x50b5d8 = document['getElementById'](_0x3999ce(0x202) + _0x1f6294)
                  , _0x680445 = document[_0x3999ce(0x1e2)](_0x3999ce(0x1f6) + _0x1f6294)
                  , _0x163228 = {};
                _0x50b5d8 && _0x50b5d8[_0x3999ce(0x263)][_0x3999ce(0x230)] > 0x0 ? _0x163228[_0x3999ce(0x21c)] = URL[_0x3999ce(0x1da)](_0x50b5d8[_0x3999ce(0x263)][0x0]) : _0x163228['image'] = _0x5ee5cb[_0x3999ce(0x21c)],
                _0x680445 ? _0x163228[_0x3999ce(0x262)] = _0x680445['value'] : _0x163228[_0x3999ce(0x262)] = _0x5ee5cb[_0x3999ce(0x262)] || '',
                _0x39708f['push'](_0x163228);
            }
            ),
            _0x39708f;
        } catch (_0x21bd38) {
            return console[_0x3ffe2b(0x26f)](_0x3ffe2b(0x24b), _0x21bd38),
            window[_0x3ffe2b(0x2ed)]?.['pages'] || this['defaultSettings'][_0x3ffe2b(0x299)] || [];
        }
    }
    [a0_0x49c502(0x1e7)](_0x486907) {
        const _0x440f91 = a0_0x49c502
          , _0x138145 = document[_0x440f91(0x1e2)](_0x440f91(0x23d))
          , _0x63f5ab = document[_0x440f91(0x1e2)](_0x440f91(0x29c));
        if (_0x138145 && _0x63f5ab) {
            const _0x40e5ff = window[_0x440f91(0x1ff)][_0x440f91(0x206)](_0x486907);
            _0x63f5ab[_0x440f91(0x2aa)] = _0x40e5ff,
            _0x138145[_0x440f91(0x231)][_0x440f91(0x1e3)] = _0x440f91(0x2e4),
            _0x138145[_0x440f91(0x231)][_0x440f91(0x29b)] = _0x440f91(0x1fd);
        }
    }
    ['copyShareURL']() {
        const _0x31ab7f = a0_0x49c502
          , _0x2a9784 = document[_0x31ab7f(0x1e2)](_0x31ab7f(0x29c))
          , _0x4ee19d = document[_0x31ab7f(0x1e2)](_0x31ab7f(0x25c));
        if (_0x2a9784) {
            _0x2a9784['select'](),
            _0x2a9784[_0x31ab7f(0x259)](0x0, 0x1869f);
            try {
                navigator[_0x31ab7f(0x2a3)][_0x31ab7f(0x2b7)](_0x2a9784[_0x31ab7f(0x2aa)])['then']( () => {
                    const _0x44ba50 = _0x31ab7f;
                    _0x4ee19d[_0x44ba50(0x249)] = _0x44ba50(0x2a9),
                    this[_0x44ba50(0x2c9)](_0x44ba50(0x2c2), _0x44ba50(0x27e)),
                    setTimeout( () => {
                        const _0x12db58 = _0x44ba50;
                        _0x4ee19d[_0x12db58(0x249)] = '📋\x20Sao\x20chép\x20link';
                    }
                    , 0x7d0);
                }
                )[_0x31ab7f(0x2b5)]( () => {
                    const _0x3148a1 = _0x31ab7f;
                    document[_0x3148a1(0x1fc)](_0x3148a1(0x2af)),
                    _0x4ee19d[_0x3148a1(0x249)] = _0x3148a1(0x2a9),
                    this[_0x3148a1(0x2c9)](_0x3148a1(0x2c2), _0x3148a1(0x27e)),
                    setTimeout( () => {
                        const _0x34d161 = _0x3148a1;
                        _0x4ee19d['textContent'] = _0x34d161(0x24f);
                    }
                    , 0x7d0);
                }
                );
            } catch (_0x5061fa) {
                console[_0x31ab7f(0x26f)](_0x31ab7f(0x2b0), _0x5061fa),
                this[_0x31ab7f(0x2c9)]('❌\x20Không\x20thể\x20sao\x20chép\x20link!', 'error');
            }
        }
    }
    [a0_0x49c502(0x2c9)](_0x3672c5, _0x4852ad=a0_0x49c502(0x240)) {
        const _0x356541 = a0_0x49c502
          , _0x4fd5af = document[_0x356541(0x23b)]('div');
        _0x4fd5af[_0x356541(0x231)]['cssText'] = _0x356541(0x1ee);
        switch (_0x4852ad) {
        case _0x356541(0x27e):
            _0x4fd5af[_0x356541(0x231)][_0x356541(0x296)] = 'linear-gradient(135deg,\x20#4caf50,\x20#66bb6a)';
            break;
        case 'error':
            _0x4fd5af[_0x356541(0x231)][_0x356541(0x296)] = _0x356541(0x219);
            break;
        default:
            _0x4fd5af[_0x356541(0x231)]['background'] = _0x356541(0x273);
        }
        _0x4fd5af[_0x356541(0x249)] = _0x3672c5,
        document[_0x356541(0x257)][_0x356541(0x24e)](_0x4fd5af),
        setTimeout( () => {
            const _0xd27d0 = _0x356541;
            _0x4fd5af[_0xd27d0(0x286)] && _0x4fd5af[_0xd27d0(0x286)][_0xd27d0(0x232)](_0x4fd5af);
        }
        , 0xbb8);
    }
    [a0_0x49c502(0x28b)](_0x19bb9a) {
        const _0x1452ba = a0_0x49c502;
        this[_0x1452ba(0x2e1)](_0x19bb9a);
    }
    ['showProgressNotification'](_0x294b28) {
        const _0x45b256 = a0_0x49c502
          , _0x136792 = document[_0x45b256(0x23b)](_0x45b256(0x2de));
        return _0x136792[_0x45b256(0x231)]['cssText'] = _0x45b256(0x277),
        _0x136792['innerHTML'] = _0x45b256(0x260) + _0x294b28 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        document[_0x45b256(0x257)]['appendChild'](_0x136792),
        _0x136792;
    }
    ['updateProgressNotification'](_0x2f4caf, _0x32baa9) {
        const _0x5b5e4d = a0_0x49c502;
        if (_0x2f4caf) {
            const _0x29d2d6 = _0x2f4caf['querySelector'](_0x5b5e4d(0x1e4));
            _0x29d2d6 && (_0x29d2d6[_0x5b5e4d(0x249)] = _0x32baa9);
        }
    }
    ['removeProgressNotification'](_0x511adb) {
        const _0x349bed = a0_0x49c502;
        _0x511adb && _0x511adb[_0x349bed(0x286)] && _0x511adb[_0x349bed(0x286)][_0x349bed(0x232)](_0x511adb);
    }
}
let pricingCalculator;
function a0_0x27d8(_0x5b8653, _0xb2708a) {
    const _0x218beb = a0_0x218b();
    return a0_0x27d8 = function(_0x27d812, _0x5c975e) {
        _0x27d812 = _0x27d812 - 0x1d7;
        let _0x4b7840 = _0x218beb[_0x27d812];
        return _0x4b7840;
    }
    ,
    a0_0x27d8(_0x5b8653, _0xb2708a);
}
function a0_0x218b() {
    const _0x103726 = ['defaultSettings', 'Nhạc\x20nền\x20tùy\x20chỉnh', 'push', 'copy', 'Copy\x20failed:', '146457CVqZss', 'viewWebsite', 'checkoutUrl', 'pricingDetails', 'catch', 'open', 'writeText', 'querySelector', 'createBirthdayWebsite', 'shareLink', 'tiktokBtn', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22voucherList\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20120px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22voucherResult\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,255,255,0.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#4caf50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20style=\x22margin:\x2010px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22tipAmount\x22\x20style=\x22font-size:\x2014px;\x20color:\x20#fff;\x22>', 'createWebsite', '(max-height:\x20500px)\x20and\x20(orientation:\x20landscape)', '</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22closeSuccessNotificationBtn\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#f44336;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>', '</strong>\x20', 'pathname', '📋\x20Đã\x20sao\x20chép\x20link\x20vào\x20clipboard!', '❌\x20[PAID\x20CATCH]\x20Error\x20in\x20paid\x20creation:', 'PENDING', 'Lỗi\x20xử\x20lý\x20thanh\x20toán:\x20', '</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22tipAmount\x22\x20type=\x22number\x22\x20min=\x220\x22\x20value=\x220\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2080px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20style=\x22border-top:\x201px\x20solid\x20rgba(255,255,255,0.3);\x20margin-top:\x2010px;\x20padding-top:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22font-size:\x2016px;\x22>', 'change', 'now', 'showNotification', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,rgb(8,\x2026,\x2028),rgb(26,\x2073,\x2074));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x208px\x2032px\x20rgba(61,\x20193,\x20213,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(10px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'tipAmount', 'gift', 'paymentSuccess', '</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20gap:\x2010px;\x20justify-content:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22copySuccessLinkBtn\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#2196f3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>', '2591519pSAibi', '</h3>\x0a\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>', 'voucherResult', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20</div>\x0a', 'bookEnabled', 'sequence', 'forEach', 'pricingTitle', 'handleActionButton', '54440OpRNyz', 'discountValue', '</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22openSuccessLinkBtn\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#4caf50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>', '\x20trang)', 'copySuccess', '</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20style=\x22margin-top:\x2022px;\x20padding:\x2014px\x2010px\x208px\x2010px;\x20background:\x20linear-gradient(90deg,#f9fafc,#f3e7fa\x2070%);\x20border-radius:\x208px;\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.06);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x20margin-bottom:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://cdn-icons-png.flaticon.com/512/3046/3046125.png\x22\x20alt=\x22TikTok\x22\x20style=\x22width:28px;height:28px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x2015px;\x20color:\x20#222;\x20font-weight:\x20500;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'div', 'thanks', 'createSuccess', 'updatePricing', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ff9800,\x20#ffc107);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20', 'getPagesFromModal', 'block', 'https://deargift.online/heartqr.html', 'initializeVoucherSystem', 'slice', 'Áp\x20dụng\x20voucher\x20thất\x20bại!', '📤\x20Đang\x20upload\x20ảnh\x20trang\x20sách...', 'https://dearlove-backend.onrender.com/api/payment/create', '📦\x20Đang\x20tạo\x20sản\x20phẩm...', 'voucher', 'settings', 'showSuccessResult', 'Lỗi\x20khi\x20tạo\x20sản\x20phẩm', 'Error\x20in\x20handleActionButton:', 'defaultConfig', 'replace', '188207BuQJWa', '\x22\x20style=\x22cursor:\x20pointer;\x20font-size:\x2011px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>', 'handleFreeCreation', 'Không\x20thể\x20tạo\x20website', 'createProductData', 'querySelectorAll', 'https://dearlove-backend.onrender.com/api/vouchers/saved/', '\x20(-', 'createObjectURL', '\x0a\x20\x20\x20\x20<h3\x20style=\x22color:\x20#4caf50;\x20margin-bottom:\x2015px;\x22>', 'backgroundMusic', 'stack', '#ffc0cb', 'matrixText', '<span\x20style=\x22color:#e53935;\x22>Không\x20thể\x20tải\x20voucher!</span>', 'voucherSection', 'getElementById', 'display', 'span', 'enableHeart', 'sequenceColor', 'showShareSection', 'vi-VN', '#ffb6c1', 'noVoucher', '⏳\x20Đang\x20xử\x20lý\x20thanh\x20toán...', 'heartEffect', '_blank', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010004;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideIn\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2012px\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'type', '<span\x20style=\x22color:#e53935;\x22>', 'basePrices', 'NumberFormat', 'toLocaleDateString', 'input[name=\x22voucher\x22]', 'getItem', 'pageContent', 'random', '713792EpolOr', '<span\x20style=\x22color:#6c63ff;font-weight:bold;\x22>', 'createPricingUI', '\x0a\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20margin-bottom:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x2018px;\x20margin-right:\x208px;\x22>💰</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22font-size:\x2016px;\x22>', 'execCommand', 'slideIn\x200.3s\x20ease', 'total', 'birthdayAPI', '#copySuccessLinkBtn', 'processPayment', 'pageImage', '\x22\x20style=\x22margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22voucher_', 'formatPrice', 'target', 'createShareableURL', '#d39b9b', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:\x20bold;\x20color:\x20', '</strong>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20id=\x22pricingDetails\x22></div>\x0a\x20\x20\x20\x20<!--\x20Voucher\x20Section\x20-->\x0a\x20\x20\x20\x20<div\x20id=\x22voucherSection\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20rgba(255,255,255,0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20margin-bottom:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x2014px;\x20margin-right:\x208px;\x22>🎫</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22font-size:\x2014px;\x22>', '🎉', '</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<button\x20id=\x22togglePricing\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20red;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x0a\x20\x20\x20\x20\x22>−</button>\x0a', '\x20VNĐ</span>', 'free', 'color', 'innerHTML', 'customMusic', 'enableBook', 'finalPrice', 'price', 'settingsModal', '1700862Atvfgv', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2020px\x20rgba(0,0,0,0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010006;\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20', 'matches', '<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#ccc;\x22>HSD:\x20', 'linear-gradient(135deg,\x20#f44336,\x20#e57373)', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:relative;\x20margin:\x205%\x20auto;\x20width:\x2090%;\x20max-width:\x20800px;\x20background:white;\x20padding:20px;\x20border-radius:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22paymentModalClose\x22\x20style=\x22position:absolute;top:10px;right:10px;\x22>✖</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20id=\x22paymentIframe\x22\x20style=\x22width:100%;\x20height:600px;\x20border:none;\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '</button>\x0a', 'image', 'name', '#ff9800', 'applyVoucher', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Lỗi\x20áp\x20dụng\x20voucher:', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#f5f5f5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-break:\x20break-all;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>', 'floor', 'countdown', 'addListener', '1746eyHMNE', 'https://dearlove-backend.onrender.com/api/vouchers/apply', '<span\x20style=\x22color:#888;\x22>', 'padding', '🎫\x20Đang\x20áp\x20dụng\x20voucher...', '</strong>\x20-\x20', 'clearVouchers', 'Tip\x20cho\x20tác\x20giả', 'Không\x20nhận\x20được\x20URL\x20thanh\x20toán', 'removeProgressNotification', 'length', 'style', 'removeChild', 'application/json', 'Birthday\x20Website', 'pricingContainer', 'getCurrentSettingsFromModal', '#paymentIframe', 'selectedVoucher', 'vouchers', '#4caf50', 'createElement', '❌\x20Số\x20tiền\x20thanh\x20toán\x20tối\x20thiểu\x20là\x2010.000\x20VNĐ!', 'shareSection', 'needLoginVoucher', '</span>', 'info', '❌\x20Lỗi\x20khi\x20tạo\x20website:\x20', 'json', '#closeSuccessNotificationBtn', '#paymentModalClose', '#heartQrBtn', 'matrixColor1', 'POST', 'voucherApplied', 'textContent', './music/happy-birthday.mp3', '❌\x20[PAGES\x20ERROR]\x20Error\x20getting\x20pages\x20from\x20modal:', '5VdhLRS', 'matrixColor2', 'appendChild', '📋\x20Sao\x20chép\x20link', 'initializePricingCalculator', 'addEventListener', 'generateOrderCode', 'HAPPY|BIRTHDAY|MY|CUTEE|LITTLE|SWARALI|❤', 'data', '?websiteId=', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100vw;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,0,0,0.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'body', 'Birthday', 'setSelectionRange', 'message', 'location', 'copyButton', 'showPaymentModal', 'user_email', 'origin', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20rgba(255,\x20255,\x20255,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x202px\x20solid\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'map', 'content', 'files', 'currentTotal', 'handlePaidCreation', 'code', 'voucherList', 'expiredAt', 'Free', '492440sBFYzE', 'cssText', 'countdownTime', 'actionButton', '❌\x20[CATCH\x20ERROR]\x20Error\x20creating\x20website:', 'error', '0.7', 'showProgressNotification', 'opacity', 'linear-gradient(135deg,\x20#2196f3,\x20#64b5f6)', 'prepareCompleteSettings', 'Lỗi\x20khi\x20tạo\x20sản\x20phẩm:\x20', 'src', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010005;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2012px\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#2196f3,\x20#64b5f6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '🌐\x20Đang\x20tạo\x20website...', 'https://dearlove-backend.onrender.com/api/products', 'needLogin', 'Trang\x20thêm\x20(', 'websiteId', 'loadUserVouchers', 'success', 'onclick', 'stringify', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://www.tiktok.com/@iamtritoan?is_from_webapp=1&sender_device=pc\x22\x20target=\x22_blank\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,#ff0050,#00f2ea\x2080%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.08);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22\x20onmouseover=\x22this.style.background=\x27#00f2ea\x27\x22\x20onmouseout=\x22this.style.background=\x27linear-gradient(90deg,#ff0050,#00f2ea\x2080%)\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'input', 'createProduct', 'Hiệu\x20ứng\x20trái\x20tim\x20(trong\x20sách)', 'parentNode', 'click', '\x0a\x20\x20\x20\x20<div\x20class=\x22voucher-item\x22\x20data-idx=\x22', 'finishCreation', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20id=\x22totalPrice\x22\x20style=\x22font-size:\x2018px;\x20color:\x20#ffeb3b;\x22>0đ</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22actionButton\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2012px\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>', 'updateFromSettings', '#ffeb3b', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<button\x20id=\x22heartQrBtn\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,#ff0050,#00f2ea\x2080%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x2022px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2017px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x22>', 'originalTotal', '✅\x20Áp\x20dụng\x20voucher\x20thành\x20công!', 'matchMedia', 'music', '❌\x20Có\x20lỗi\x20xảy\x20ra!', 'updateProgressNotification', '\x20trang.\x20Vui\x20lòng\x20thêm\x20hoặc\x20xóa\x201\x20trang\x20để\x20tạo\x20cấu\x20trúc\x20hợp\x20lệ.', 'PAID', 'background', '❌\x20Lỗi\x20thanh\x20toán:\x20', 'FREE', 'pages', 'round', 'animation', 'shareURL', 'toString', './music/happybirtday_uia.mp3', 'none', '🎫\x20[VOUCHER\x20LOAD]\x20API\x20returned\x20error:', 'toLocaleString', 'togglePricing', 'clipboard', 'tip', 'user_uid', 'calculatePrice', 'join', 'PARA TI', '✅\x20Đã\x20sao\x20chép!', 'value', 'disabled'];
    a0_0x218b = function() {
        return _0x103726;
    }
    ;
    return a0_0x218b();
}
function initializePricingCalculator() {
    !pricingCalculator && (pricingCalculator = new PricingCalculator(),
    window['pricingCalculator'] = pricingCalculator);
}
window[a0_0x49c502(0x250)] = initializePricingCalculator;
