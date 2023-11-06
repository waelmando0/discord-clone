'use client';

import { X } from 'lucide-react';
import Image from 'next/image';

import { UploadDropzone } from '@/lib/uploadthings';

import '@uploadthing/react/styles.css';

interface FileUploadProps {
	onChange: (url?: string) => void;
	value: string;
	endPoint: 'messageFile' | 'serverImage';
}

export const FileUpload = ({ onChange, value, endPoint }: FileUploadProps) => {
	const fileType = value?.split('.').pop();

	if (value && fileType !== 'pdf') {
		return (
			<div className='relative w-20 h-20'>
				<Image fill src={value} alt='Upload' className='rounded-full' />
				<button
					onClick={() => onChange('')}
					className='bg-rose-500 text-white  p-1 rounded-full absolute top-0 right-0 shadow-sm'
					type='button'
				>
					<X className='w-4 h-4' />
				</button>
			</div>
		);
	}
	return (
		<div>
			<UploadDropzone
				endpoint={endPoint}
				onClientUploadComplete={(res) => {
					onChange(res?.[0].url);
				}}
				onUploadError={(err: Error) => {
					console.log(err);
				}}
			/>
		</div>
	);
};
