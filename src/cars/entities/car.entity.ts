import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Car extends BaseEntity {

@PrimaryGeneratedColumn('uuid')
id: string;

@UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
updatedAt: Date;

@Column({ name: 'name', type: 'varchar'})
name: string;

@Column({ name: 'kml', type: 'numeric'})
kml: number;

@Column({ name: 'brand', type: 'varchar'})
brand: string;

@Column({ name: 'year', type: 'numeric'})
year: number;

}

