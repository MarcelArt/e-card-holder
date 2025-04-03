import ProfileComponent from '@/components/ProfileComponent';
import { Box } from '@/components/ui/box';
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { FlatList } from 'react-native';
import { Plus } from 'lucide-react-native';

export default function ProfilesView() {
	const datas = [
		{
			id: 'abc',
			name: 'Marcel',
		},
		{
			id: '098',
			name: 'Marcel 2',
		},
	];

	return (
		<Box className='h-full'>
			<VStack className="mt-16 mx-2">
				<Heading size="3xl">Pilih profil</Heading>
				<FlatList data={datas} renderItem={({ item }) => <ProfileComponent id={item.id} name={item.name} />} />
			</VStack>
			<Fab size="md" placement="bottom right" isHovered={false} isDisabled={false} isPressed={false}>
				<FabIcon as={Plus} />
				<FabLabel>Quick start</FabLabel>
			</Fab>
		</Box>
	);
}
