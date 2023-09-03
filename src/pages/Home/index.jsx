import React, { useMemo, useState } from 'react'
import { useBets } from '@/hooks'
import { Table, Popup } from '@/components'
import { useData } from '../../DataContext';

const HomePage = () => {
    const { data, isLoading } = useBets()
    const { setBetData } = useData();

    const columns = useMemo(
        () => [
            {
                accessorKey: 'counter',
                header: 'Event Count: 3000',
                width: 350,
                bodyHide: true,
                textAlign: 'left',
                renderValue: ({ row }) => <div><b>{row?.C}</b> {row?.T} {row?.N}</div>,
                headerValue: ({ row }) => `${row?.D} ${row?.DAY} ${row?.LN}`
            },
            {
                accessorKey: 'comments',
                header: 'Yorumlar',
                renderValue: () => `Yorumlar`
            },
            {
                accessorKey: 'space',
                header: ' ',
                renderValue: ({ row }) => row?.OCG?.[1]?.MBS

            },
            {
                accessorKey: 'm1',
                header: '1',
                renderValue: ({ row }) => row?.OCG?.[1]?.OC?.[0]?.["O"],
                clickable: true
            },
            {
                accessorKey: 'mx',
                header: 'x',
                renderValue: ({ row }) => row?.OCG?.[1]?.OC?.[1]?.["O"],
                clickable: true
            },
            {
                accessorKey: 'm2',
                header: '2',
            },
            {
                accessorKey: 'alt',
                header: 'Alt',
                renderValue: ({ row }) => row?.OCG?.[5]?.OC?.[25]?.["O"],
                clickable: true
            },
            {
                accessorKey: 'ust',
                header: 'Üst',
                renderValue: ({ row }) => row?.OCG?.[5]?.OC?.[26]?.["O"],
                clickable: true
            },
            {
                accessorKey: 'hh1',
                header: 'H1',
            },
            {
                accessorKey: 'h1',
                header: '1',
            },
            {
                accessorKey: 'hx',
                header: 'x',
            },
            {
                accessorKey: 'h2',
                header: '2',
            },
            {
                accessorKey: 'hh2',
                header: 'H2',
            },
            {
                accessorKey: 'h1x',
                header: '1-X',
                renderValue: ({ row }) => row?.OCG?.[2]?.OC?.[3]?.["O"],
                clickable: true
            },
            {
                accessorKey: 'h12',
                header: '1-2',
                renderValue: ({ row }) => row?.OCG?.[2]?.OC?.[4]?.["O"],
                clickable: true
            },
            {
                accessorKey: 'hx2',
                header: 'X-2',
                renderValue: ({ row }) => row?.OCG?.[2]?.OC?.[5]?.["O"],
                clickable: true
            },
            {
                accessorKey: 'isCheck',
                header: 'Var',
            },
            {
                accessorKey: 'isCheck1',
                header: 'Yok',
            },
            {
                accessorKey: 'commentCount',
                header: '+99',
                renderValue: () => '3'
            },
        ],
        [],
    );

    return (
        <>
            <Table columns={columns} data={data} onSelect={(item) => setBetData(item)} />
            <Popup />
        </>
    )
}

export default HomePage
