export {}

class MemoryDatabase<T> {

    protected items = new Array<T>();

    public addItem(item: T) {
        this.items.push(item)
    }

    public getItemByIndex(index: number): T | undefined {
        return this.items[index]
    }

    public listItems() {
        this.items.forEach(item => {
            console.log(item)
        })
    }
}

const namesDatabase = new MemoryDatabase<string>();
namesDatabase.addItem('John')
const first = namesDatabase.getItemByIndex(0)


class MemoryDatabaseWithDelete<T extends {id: string}> extends MemoryDatabase<T> {

    public delete(id: string) {
        const index = this.items.findIndex(item => item.id === id)
        this.items.splice(index, 1)
    }
    
}

const databaseWithIds = new MemoryDatabaseWithDelete<{id: string}>();
databaseWithIds.addItem({id: '123'})
const firstId = databaseWithIds.getItemByIndex(0)
