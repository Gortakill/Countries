'use client';
import { TypePopulation } from '@/types/types';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

interface Props {
    population: TypePopulation[];
}

export const PopulationChart = ({ population }: Props) => {
    const chartRef = useRef<Chart | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        if (canvasRef.current) {
            chartRef.current = new Chart(canvasRef.current, {
                type: 'bar',
                data: {
                    labels: population.map(
                        (population: TypePopulation) => population.year,
                    ),
                    datasets: [
                        {
                            label: 'Population',
                            data: population.map(
                                (population: TypePopulation) =>
                                    population.value,
                            ),
                        },
                    ],
                },
            });
        }
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [population]);

    return (
        <div className="w-1/2 ml-5">
            <canvas ref={canvasRef} id="PopulationChart"></canvas>
        </div>
    );
};
