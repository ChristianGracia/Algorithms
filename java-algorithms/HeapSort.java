package com.cg;

public class Main {

    public static void main(String[] args) {

        int[] arrayToBeSorted = {3, 2, 1};
        Heap heap = new Heap(3);

        for (int i = 0; i < arrayToBeSorted.length; i++) {
            heap.insert(arrayToBeSorted[i]);

        }

        heap.printHeap();
        heap.sort();
        heap.printHeap();

    }

    public static class Heap {

        private int[] heap;
        private int size;

        public Heap(int capacity) {
            heap = new int[capacity];
        }

        public void sort() {
            int lastHeapIndex = size - 1;
            for (int i = 0; i < lastHeapIndex; i++) {
                int temp = heap[0];
                heap[0] = heap[lastHeapIndex - i];
                heap[lastHeapIndex - i] = temp;
                fixHeapBelow(0, lastHeapIndex - i - 1);
            }
        }

        public boolean isFull() {
            return size == heap.length;
        }


        public int getParent(int index) {
            return (index - 1) / 2;
        }

        public int getChild(int index, boolean left) {
            return 2 * index + (left ? 1 : 2);
        }


        public void fixHeapAbove(int index) {

            int newValue = heap[index];
            while (index > 0 && newValue > heap[getParent(index)]) {
                heap[index] = heap[getParent(index)];
                index = getParent(index);
            }
            heap[index] = newValue;

        }

        public void insert(int value) {
            if (isFull()) {
                throw new IndexOutOfBoundsException("Heap is full");
            }

            heap[size] = value;

            fixHeapAbove(size);
            size++;
        }

        private void fixHeapBelow(int index, int lastHeapIndex) {

            int childToSwap;

            while (index <= lastHeapIndex) {
                int leftChild = getChild(index, true);
                int rightChild = getChild(index, false);


                if (leftChild <= lastHeapIndex) {
                    if (rightChild > lastHeapIndex) {
                        childToSwap = leftChild;
                    } else {
                        childToSwap = (heap[leftChild] > heap[rightChild] ? leftChild : rightChild);
                    }

                    if (heap[index] < heap[childToSwap]) {
                        int temp = heap[index];
                        heap[index] = heap[childToSwap];
                        heap[childToSwap] = temp;

                    } else {
                        break;
                    }
                    index = childToSwap;
                } else {
                    break;
                }


            }

        }

        public void printHeap() {
            for (int i = 0; i < size; i++) {
                System.out.print(heap[i]);
                System.out.print(", ");
            }
            System.out.println();
        }
    }

}
