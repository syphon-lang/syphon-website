import type {NextPage} from 'next'
import PageNotFoundImage from '@/public/PageNotFound.svg'
import Image from 'next/image'
import { Center, Title } from '@mantine/core'

const PageNotFound: NextPage = () => {
    return (
        <>
            <Center>
                <Image src={PageNotFoundImage} height={512} width={512} alt={"Page not found image"} />
            </Center>
            <Center>
                <Title>
                    404 Page not found
                </Title>
            </Center>
        </>
    )
}

export default PageNotFound