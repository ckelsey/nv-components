var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @desc renders a material design icon with given color, size, and type */
export class MaterialIcon {
    constructor() {
        /** @desc The key of the icon to use */
        this.type = 'close';
        /** @desc color of icon, defaults to inherited color */
        this.color = `inherit`;
        /** @desc size of icon */
        this.size = `24px`;
    }
    /** @desc The icon svg string */
    get svgIcon() {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">${this.getIcon(this.type) || ``}</svg>`;
    }
    /** @desc The styles object for the icon */
    get styles() {
        return {
            color: this.color || `inherit`,
            height: this.size || `24px`,
            width: this.size || `24px`
        };
    }
    /** @desc renders the component markup */
    render() {
        return (h("span", { class: "material-icon", innerHTML: this.svgIcon, style: this.styles }));
    }
    /**
     * @desc As many of the material icons are the same but go by different names, this function maps them to one name to save on space
     * @param key The key to get
     * */
    getIcon(key) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (key) {
                case 'schedule':
                case 'query_builder':
                    return this.icons()['access_time'];
                case 'queue':
                case 'library_add':
                    return this.icons()['add_to_photos'];
                case 'flight':
                case 'local_airport':
                    return this.icons()['airplanemode_active'];
                case 'insert_chart':
                    return this.icons()['assessment'];
                case 'flag':
                    return this.icons()['assistant_photo'];
                case 'music_note':
                    return this.icons()['audiotrack'];
                case 'cloud_upload':
                    return this.icons()['backup'];
                case 'stay_current_landscape':
                    return this.icons()['stay_primary_landscape'];
                case 'warning':
                    return this.icons()['report_problem'];
                case 'create':
                    return this.icons()['edit'];
                case 'phonelink':
                    return this.icons()['devices'];
                case 'settings_input_composite':
                    return this.icons()['settings_input_component'];
                case 'local_hotel':
                    return this.icons()['hotel'];
                case 'local_dining':
                    return this.icons()['restaurant_menu'];
                case 'mood':
                    return this.icons()['insert_emoticon'];
                case 'directions_subway':
                    return this.icons()['directions_transit'];
                case 'place':
                case 'room':
                    return this.icons()['location_on'];
                case 'landscape':
                case 'terrain':
                    return this.icons()['filter_hdr'];
                case 'palette':
                    return this.icons()['color_lens'];
                case 'sync':
                    return this.icons()['loop'];
                case 'my_location':
                    return this.icons()['gps_fixed'];
                case 'star':
                    return this.icons()['grade'];
                case 'bluetooth_searching':
                    return this.icons()['bluetooth_audio'];
                case 'people':
                    return this.icons()['group'];
                case 'battery_std':
                    return this.icons()['battery_full'];
                case 'merge_type':
                    return this.icons()['call_merge'];
                case 'theaters':
                    return this.icons()['local_movies'];
                case 'movie_creation':
                    return this.icons()['movie'];
                case 'turned_in':
                    return this.icons()['bookmark'];
                case 'close':
                    return this.icons()['clear'];
                case 'open_in_new':
                    return this.icons()['launch'];
                case 'class':
                    return this.icons()['book'];
                case 'sd_storage':
                    return this.icons()['sd_card'];
                case 'store':
                    return this.icons()['store_mall_directory'];
                case 'brightness_high':
                    return this.icons()['brightness_7'];
                case 'lock':
                    return this.icons()['https'];
                case 'local_play':
                    return this.icons()['local_activity'];
                case 'brightness_medium':
                    return this.icons()['brightness_6'];
                case 'brightness_low':
                    return this.icons()['brightness_5'];
                case 'laptop':
                    return this.icons()['computer'];
                case 'location_searching':
                    return this.icons()['gps_not_fixed'];
                case 'crop_landscape':
                    return this.icons()['crop_5_4'];
                case 'local_phone':
                case 'phone':
                    return this.icons()['call'];
                case 'insert_photo':
                case 'photo':
                    return this.icons()['image'];
                case 'mail':
                case 'markunread':
                    return this.icons()['email'];
                case 'question_answer':
                    return this.icons()['forum'];
                case 'photo_library':
                    return this.icons()['collections'];
                case 'tv':
                    return this.icons()['personal_video'];
                case 'signal_cellular_3_bar':
                    return this.icons()['network_cell'];
                case 'thumb_up_alt':
                    return this.icons()['thumbs_up'];
                default:
                    return this.icons()[key];
            }
        });
    }
    /** @desc Returns the icon data JSON */
    icons() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.iconJSON;
        });
    }
    static get is() { return "material-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "getIcon": {
            "method": true
        },
        "iconJSON": {
            "context": "iconJSON"
        },
        "icons": {
            "method": true
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "/**style-placeholder:material-icon:**/"; }
}
// @Method()
// iconsToJson() {
//     console.log(JSON.stringify(this.icons()))
// }
// @Method()
// findDupes() {
//     var keys = Object.keys(this.icons());
//     var vals = {};
//     var dupes = {};
//     keys.forEach(key => {
//         if (vals[this.icons()[key]]) {
//             if (!dupes[this.icons()[key]]) {
//                 dupes[this.icons()[key]] = []
//             }
//             dupes[this.icons()[key]].push(key)
//         }
//         vals[this.icons()[key]] = true
//     })
//     console.log(dupes)
// }
