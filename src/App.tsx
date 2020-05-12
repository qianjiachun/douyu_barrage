import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    public render() {
        return (
            <div>
                <router-view></router-view>
            </div>
        );
    }
}