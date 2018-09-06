import { Component, Prop, Method } from '@stencil/core'

/** @desc renders a material design icon with given color, size, and type */

@Component({
    tag: 'material-icon',
    styleUrl: 'material-icon.scss',
    shadow: true
})
export class MaterialIcon {

    /** @desc The key of the icon to use */
    @Prop() type: string = 'close'

    /** @desc color of icon, defaults to inherited color */
    @Prop() color: string = `inherit`

    /** @desc size of icon */
    @Prop() size: string = `24px`

    /** @desc icon strings object */
    @Prop({ context: 'iconJSON' }) private iconJSON: { [key: string]: string };

    /** @desc The icon svg string */
    get svgIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">${this.getIcon(this.type) || ``}</svg>`
    }

    /** @desc The styles object for the icon */
    get styles(): { [key: string]: string } {
        return {
            color: this.color || `inherit`,
            height: this.size || `24px`,
            width: this.size || `24px`
        }
    }

    /** @desc renders the component markup */
    render() {
        return (
            <span class="material-icon" innerHTML={this.svgIcon} style={this.styles}></span>
        );
    }

    /** 
     * @desc As many of the material icons are the same but go by different names, this function maps them to one name to save on space 
     * @param key The key to get
     * */
    @Method()
    getIcon(key: string): string {
        switch (key) {
            case 'schedule':
            case 'query_builder':
                return this.icons()['access_time']

            case 'queue':
            case 'library_add':
                return this.icons()['add_to_photos']

            case 'flight':
            case 'local_airport':
                return this.icons()['airplanemode_active']

            case 'insert_chart':
                return this.icons()['assessment']

            case 'flag':
                return this.icons()['assistant_photo']

            case 'music_note':
                return this.icons()['audiotrack']

            case 'cloud_upload':
                return this.icons()['backup']

            case 'stay_current_landscape':
                return this.icons()['stay_primary_landscape']

            case 'warning':
                return this.icons()['report_problem']

            case 'create':
                return this.icons()['edit']

            case 'phonelink':
                return this.icons()['devices']

            case 'settings_input_composite':
                return this.icons()['settings_input_component']

            case 'local_hotel':
                return this.icons()['hotel']

            case 'local_dining':
                return this.icons()['restaurant_menu']

            case 'mood':
                return this.icons()['insert_emoticon']

            case 'directions_subway':
                return this.icons()['directions_transit']

            case 'place':
            case 'room':
                return this.icons()['location_on']

            case 'landscape':
            case 'terrain':
                return this.icons()['filter_hdr']

            case 'palette':
                return this.icons()['color_lens']

            case 'sync':
                return this.icons()['loop']

            case 'my_location':
                return this.icons()['gps_fixed']

            case 'star':
                return this.icons()['grade']

            case 'bluetooth_searching':
                return this.icons()['bluetooth_audio']

            case 'people':
                return this.icons()['group']

            case 'battery_std':
                return this.icons()['battery_full']

            case 'merge_type':
                return this.icons()['call_merge']

            case 'theaters':
                return this.icons()['local_movies']

            case 'movie_creation':
                return this.icons()['movie']

            case 'turned_in':
                return this.icons()['bookmark']

            case 'close':
                return this.icons()['clear']

            case 'open_in_new':
                return this.icons()['launch']

            case 'class':
                return this.icons()['book']

            case 'sd_storage':
                return this.icons()['sd_card']

            case 'store':
                return this.icons()['store_mall_directory']

            case 'brightness_high':
                return this.icons()['brightness_7']

            case 'lock':
                return this.icons()['https']

            case 'local_play':
                return this.icons()['local_activity']

            case 'brightness_medium':
                return this.icons()['brightness_6']

            case 'brightness_low':
                return this.icons()['brightness_5']

            case 'laptop':
                return this.icons()['computer']

            case 'location_searching':
                return this.icons()['gps_not_fixed']

            case 'crop_landscape':
                return this.icons()['crop_5_4']

            case 'local_phone':
            case 'phone':
                return this.icons()['call']

            case 'insert_photo':
            case 'photo':
                return this.icons()['image']

            case 'mail':
            case 'markunread':
                return this.icons()['email']

            case 'question_answer':
                return this.icons()['forum']

            case 'photo_library':
                return this.icons()['collections']

            case 'tv':
                return this.icons()['personal_video']

            case 'signal_cellular_3_bar':
                return this.icons()['network_cell']

            case 'thumb_up_alt':
                return this.icons()['thumbs_up']

            default:
                return this.icons()[key]
        }
    }

    /** @desc Returns the icon data JSON */
    @Method()
    icons(): { [key: string]: string } {
        return this.iconJSON
    }
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