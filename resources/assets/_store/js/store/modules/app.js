import Cookies from 'js-cookie'

const app = {
    state: {
        loading:false,
        sidebar: {
            opened: !+Cookies.get('sidebarStatus'),
            withoutAnimation: false
        },
        device: 'desktop',
        language: Cookies.get('language') || 'br',
        avatar: 'http://apeppers.com.br/builder/adminbuilder/your-custom-admin/assets/images/avatars/avatar5_big.png'
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', 1)
            } else {
                Cookies.set('sidebarStatus', 0)
            }
            state.sidebar.opened = !state.sidebar.opened;
            state.sidebar.withoutAnimation = false
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            Cookies.set('sidebarStatus', 1);
            state.sidebar.opened = false;
            state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        },
        SET_LANGUAGE: (state, language) => {
            state.language = language;
            Cookies.set('language', language)
        },
        SET_LOADING: (state, load) => {
            state.loading = load;
        }
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({ commit }, { withoutAnimation }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        toggleDevice({ commit }, device) {
            commit('TOGGLE_DEVICE', device)
        },
        setLanguage({ commit }, language) {
            commit('SET_LANGUAGE', language)
        }
    }
};

export default app
