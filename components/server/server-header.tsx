'use client';

import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	ChevronDown,
	LogOut,
	PlusCircle,
	Settings,
	Trash,
	UserPlus,
	Users,
} from 'lucide-react';
import { useModal } from '@/hooks/use-modal-store';

interface ServerHeaderProps {
	server: ServerWithMembersWithProfiles;
	role?: MemberRole;
}

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
	const { onOpen } = useModal();

	const isAdmin = role === MemberRole.ADMIN;
	const isModerator = isAdmin || role === MemberRole.MODERATOR;

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger className='focus:outline-none' asChild>
					<button className='flex items-center w-full h-12 text-md font-semibold px-2 border-b-2 border-neutral-200 dark:border-neutral-800  bg-zinc-50 hover:bg-zinc-700/10  dark:bg-zinc-700/20 dark:hover:bg-zinc-700/50 transition'>
						{server.name}
						<ChevronDown className='w-5 h-5 ml-auto hidden md:block' />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px] ml-0'>
					{isModerator && (
						<DropdownMenuItem
							onClick={() => onOpen('invite', { server })}
							className='text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer'
						>
							Invite People
							<UserPlus className='w-5 h-5 ml-auto' />
						</DropdownMenuItem>
					)}
					{isAdmin && (
						<DropdownMenuItem
							onClick={() => onOpen('editServer', { server })}
							className='px-3 py-2 text-sm cursor-pointer'
						>
							Server Settings
							<Settings className='w-5 h-5 ml-auto' />
						</DropdownMenuItem>
					)}
					{isAdmin && (
						<DropdownMenuItem
							onClick={() => onOpen('members', { server })}
							className='px-3 py-2 text-sm cursor-pointer'
						>
							Manage Members
							<Users className='w-5 h-5 ml-auto' />
						</DropdownMenuItem>
					)}
					{isModerator && (
						<DropdownMenuItem
							className='px-3 py-2 text-sm cursor-pointer'
							onClick={() => onOpen('createChannel')}
						>
							Create Channel
							<PlusCircle className='w-5 h-5 ml-auto' />
						</DropdownMenuItem>
					)}
					{isModerator && <DropdownMenuSeparator />}
					{isAdmin && (
						<DropdownMenuItem
							onClick={() => onOpen('deleteServer', { server })}
							className='text-rose-500 px-3 py-2 text-sm cursor-pointer'
						>
							Delete Server
							<Trash className='w-5 h-5 ml-auto' />
						</DropdownMenuItem>
					)}
					{!isAdmin && (
						<DropdownMenuItem
							className='text-rose-500 px-3 py-2 text-sm cursor-pointer'
							onClick={() => onOpen('leaveServer', { server })}
						>
							Leave Server
							<LogOut className='w-5 h-5 ml-auto' />
						</DropdownMenuItem>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default ServerHeader;
