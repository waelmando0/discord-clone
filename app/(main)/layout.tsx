import NavigationSidebar from '@/components/navigation/navigation-sidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
			<div className='hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
				<NavigationSidebar />
			</div>
			<div className='md:pl-[72px] h-full mx-6 my-4'>{children}</div>
		</div>
	);
};

export default MainLayout;