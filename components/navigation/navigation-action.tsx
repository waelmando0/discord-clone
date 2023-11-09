'use client';

import { Plus } from 'lucide-react';
import { ActionTooltip } from '../action-tooltip';

export const NavigationAction = () => {
	return (
		<div>
			<ActionTooltip side='right' align='center' label='Add a server'>
				<button className='group flex items-center'>
					<div className='flex items-center justify-center mx-3 h-[48px] w-[48px] rounded-[24px] transition-all overflow-hidden bg-background dark:bg-neutral-700  group-hover:rounded-[16px] group-hover:bg-emerald-500 border'>
						<Plus
							className='group-hover:text-white transition text-emerald-500'
							size={25}
						/>
					</div>
				</button>
			</ActionTooltip>
		</div>
	);
};
