import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text } from '@/components/ui/text';

export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						drawerLabel: 'Profil',
						title: 'Profil',
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
