import Button from './ui/Button'

const Boost = () => {
  return (
   <section className='bg-dark-violet p-4 bg-boost-mobile flex flex-col gap-6 justify-center items-center h-[300px]'>
        <h3 className='text-2xl font-semibold text-white'>Boost your links today</h3>
        <div className='w-1/2'>
            <Button variant='rounded'>Get Started</Button>
        </div>
   </section>
  )
}

export default Boost
