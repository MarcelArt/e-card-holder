import { IconSymbol } from '../ui/IconSymbol';

export default function AddIcon({ size, color, icon }: { size: number; color: string, icon: string }) {
	return () => <IconSymbol size={size} name={icon} color={color} />;
}
